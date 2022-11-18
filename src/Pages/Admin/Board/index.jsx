import React, {useState, useEffect} from 'react';
import {Button, Input, Select} from '../../../Components/Atom';
import {Pagination} from '../../../Components/Organism';
import {Boards} from '../../../Components/Template';
import {boardProps, categoryOptions} from './data';
import * as S from './style';
import {Table, Space, Button as AntdButton, Modal, Radio} from 'antd';
import BoardForm from '../BoardForm';
import {deleteBoard, getListBoard} from '../../../api/board';
import BoardUpdateForm from '../BoardUpdateForm';

const {Column} = Table;

const AdminBoard = () => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('공지');
	const [page, setPage] = useState(1);
	const [modal, setModal] = useState({update: false, create: false});
	const [post, setPost] = useState([]);
	const [id, setId] = useState(0);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		(async () => {
			let res = await getListBoard({category, page});
			let data = res.data.results.map((post, idx) => {
				return {...post, no: res.data.count - (page - 1) * 10 - idx};
			});
			setPost(data);
		})();
	}, [search, category, page, toggle]);

	return (
		<S.Container>
			<Radio.Group
				style={{margin: '1rem'}}
				value={category}
				onChange={(e) => {
					setCategory(e.target.value);
				}}
				options={categoryOptions}
				optionType={'button'}
			/>
			<div style={{width: '98%', textAlign: 'right'}}>
				<AntdButton
					type={'primary'}
					onClick={() => setModal({...modal, create: true})}
				>
					글쓰기
				</AntdButton>
			</div>
			<Table
				dataSource={post}
				pagination={false}
				style={{margin: '1rem'}}
			>
				<Column
					rowSpan={2}
					title={'번호'}
					dataIndex={'no'}
					key={'no'}
					width={'10%'}
					align={'center'}
				/>
				<Column
					title={'제목'}
					align={'center'}
					dataIndex={'title'}
					key={'no'}
					width={'50%'}
				/>
				<Column
					title={'작성자'}
					align={'center'}
					dataIndex={'author'}
					key={'no'}
					width={'10%'}
					responsive={['md']}
				/>
				<Column
					title={'생성일'}
					align={'center'}
					dataIndex={'created'}
					key={'no'}
					width={'10%'}
					responsive={['md']}
				/>
				<Column
					title={'조회수'}
					align={'center'}
					dataIndex={'hit'}
					key={'no'}
					width={'10%'}
					responsive={['md']}
				/>
				<Column
					title={'액션'}
					key={'action'}
					align={'center'}
					render={(_, record) => (
						<Space size='small'>
							<AntdButton
								onClick={() => {
									setModal({...modal, update: true});
									setId(record.id);
								}}
							>
								수정
							</AntdButton>
							<AntdButton
								onClick={async () => {
									await deleteBoard({id: record.id});
									setToggle(!toggle);
								}}
							>
								삭제
							</AntdButton>
						</Space>
					)}
					width={'10%'}
				/>
			</Table>

			<Modal
				open={modal.create}
				onCancel={() => setModal({...modal, create: false})}
				footer={[]}
			>
				<BoardForm onClose={() => setModal(false)} />
			</Modal>
			<Modal
				open={modal.update}
				onCancel={() => {
					setModal({...modal, update: false});
					setToggle(!toggle);
				}}
				footer={[]}
			>
				{modal.update && (
					<BoardUpdateForm
						id={id}
						onClose={() => {
							setModal({...modal, update: false});
							setToggle(!toggle);
						}}
					/>
				)}
			</Modal>
		</S.Container>
	);
};

export default AdminBoard;
