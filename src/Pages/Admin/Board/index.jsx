import React, {useState, useEffect} from 'react';
import {categoryOptions} from './data';
import * as S from './style';
import {Table, Space, Button as AntdButton, Modal, Radio, Input} from 'antd';
import BoardForm from '../BoardForm';
import {deleteBoard, getListBoard} from '../../../api/board';
import BoardUpdateForm from '../BoardUpdateForm';

const {Column} = Table;

const AdminBoard = () => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('공지');
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(1);
	const [modal, setModal] = useState({update: false, create: false});
	const [post, setPost] = useState([]);
	const [id, setId] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [ordering, setOrdering] = useState('');

	useEffect(() => {
		(async () => {
			let res = await getListBoard({category, page, ordering, search});
			let data = res.data.results.map((post, idx) => {
				return {...post, no: res.data.count - (page - 1) * 10 - idx};
			});
			setPost(data);
			setTotal(res.data.count);
		})();
	}, [search, category, page, toggle, ordering]);

	const setSorter = (sorts) => {
		if (!Array.isArray(sorts)) {
			sorts = [sorts];
		}

		let sortList = sorts.map((item) => {
			if (item.order) {
				return `${item.order === 'ascend' ? '' : '-'}${item.field}`;
			}
		});
		if (sortList) {
			setOrdering(sortList.join(','));
		}
	};

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
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '1rem',
				}}
			>
				<div style={{width: '200px'}}>
					<Input.Search onSearch={(e) => setSearch(e)} />
				</div>
				<AntdButton
					type={'primary'}
					onClick={() => setModal({...modal, create: true})}
				>
					글쓰기
				</AntdButton>
			</div>
			<Table
				dataSource={post}
				pagination={{
					defaultCurrent: 1,
					total: total,
				}}
				style={{margin: '1rem'}}
				onChange={(pagination, filters, sorter, extra) => {
					setPage(pagination.current);
					setSorter(sorter);
				}}
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
					key={'title'}
					width={'50%'}
					sorter={{
						multiple: 1,
					}}
				/>
				<Column
					title={'작성자'}
					align={'center'}
					dataIndex={'author'}
					key={'author'}
					width={'10%'}
					responsive={['md']}
					sorter={{
						multiple: 2,
					}}
				/>
				<Column
					title={'생성일'}
					align={'center'}
					dataIndex={'created'}
					key={'created'}
					width={'10%'}
					responsive={['md']}
					sorter={{
						multiple: 3,
					}}
				/>
				<Column
					title={'조회수'}
					align={'center'}
					dataIndex={'hit'}
					key={'hit'}
					width={'10%'}
					responsive={['md']}
					sorter={{
						multiple: 4,
					}}
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
				<BoardForm
					category={category}
					onClose={() => setModal(false)}
				/>
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
