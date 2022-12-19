import React, {useEffect, useState} from 'react';
import * as S from './style';
import {actionOptions, columns} from './data';
import {
	deleteParticipation,
	deleteParticipations,
	getListDeletedParticipation,
	recoverParticipation,
	recoverParticipations,
} from '../../../api/admin';
import {Input, Button, Select, Table, Space} from 'antd';

const AdminDeletedParticipation = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState('');
	const [search, setSearch] = useState('');
	const [ordering, setOrdering] = useState('');
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	useEffect(() => {
		(async () => {
			let res = await getListDeletedParticipation({
				page,
				search,
				ordering,
			});
			if (!res.isSuccess) {
				return;
			}
			let data = res.data.results.map((item, idx) => ({
				...item,
				key: item.id,
				no: res.data.count - (page - 1) * 10 - idx,
			}));
			setParticipation(data);
			setTotal(res.data.count);
		})();
	}, [page, toggle, search, ordering]);
	const doAction = async () => {
		switch (action) {
			case 'delete':
				await deleteParticipations({ids: selectedRowKeys});
				break;
			case 'recover':
				await recoverParticipations({ids: selectedRowKeys});
				break;
			default:
				return alert('액션을 설정해주세요.');
		}
		setToggle(!toggle);
	};

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
			<S.SearchWrapper>
				<Input.Search
					style={{width: '300px'}}
					onSearch={(e) => setSearch(e)}
				/>
			</S.SearchWrapper>
			<S.ActionWrapper>
				<Select
					options={actionOptions}
					value={action}
					onChange={(e) => setAction(e)}
				/>
				<Button onClick={doAction}>실행</Button>
			</S.ActionWrapper>
			<Table
				dataSource={participation}
				onChange={(pagination, filters, sorter, extra) => {
					setPage(pagination.current);
					setSorter(sorter);
				}}
				pagination={{
					defaultCurrent: 1,
					total: total,
				}}
				rowSelection={{
					selectedRowKeys,
					onChange: (e) => {
						setSelectedRowKeys(e);
					},
				}}
			>
				{columns.map((col) => (
					<Table.Column align={'center'} {...col} />
				))}
				<Table.Column
					align={'center'}
					title={'액션'}
					render={(_, record) => (
						<Space>
							<Button
								onClick={async () => {
									await recoverParticipation({id: record.id});
									setToggle(!toggle);
								}}
							>
								복구
							</Button>
							<Button
								onClick={async () => {
									await deleteParticipation({id: record.id});
									setToggle(!toggle);
								}}
							>
								삭제
							</Button>
						</Space>
					)}
				/>
			</Table>
		</S.Container>
	);
};

export default AdminDeletedParticipation;
