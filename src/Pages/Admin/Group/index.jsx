import React, {useEffect, useState} from 'react';
import * as S from './style';
import {
	checkBoxProps,
	searchProps,
	selectProps,
	orderInit,
	depositInit,
	columns,
} from './data';
import {
	deleteGroup,
	deleteGroups,
	exportGroup,
	exportParticipation,
	getListGroup,
	setGroupDeposit,
	setGroupDeposits,
} from '../../../api/admin';
import {ModalGroupForm} from '../index';
import {dictToList, dictToStr} from '../../../util/postProcess';
import {
	Checkbox,
	Radio,
	Button,
	Input,
	Select,
	Table,
	Space,
	Modal,
} from 'antd';

const AdminGroup = () => {
	const [group, setGroup] = useState([]);
	const [page, setPage] = useState(1);
	const [ordering, setOrdering] = useState('');
	const [total, setTotal] = useState(0);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState('');
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState([]);
	const [order, setOrder] = useState('id');
	const [deposit, setDeposit] = useState('all');
	const [select, setSelect] = useState(0);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	useEffect(() => {
		(async () => {
			let res = await getListGroup({page, search, ordering});
			if (!res.isSuccess) {
				return;
			}
			let data = res.data.results.map((item, idx) => {
				return {
					...item,
					no: res.data.count - (page - 1) * 10 - idx,
					key: item.id,
				};
			});
			setGroup(data);
			setTotal(Math.ceil(res.data.count / 10));
		})();
	}, [page, toggle, search, ordering]);

	const doAction = async () => {
		switch (action) {
			case 'set_deposit':
				await setGroupDeposits({
					ids: selectedRowKeys,
					is_deposit: true,
				});
				break;
			case 'unset_deposit':
				await setGroupDeposits({
					ids: selectedRowKeys,
					is_deposit: false,
				});
				break;
			case 'delete':
				await deleteGroups({ids: selectedRowKeys});
				break;
			default:
				return alert('액션을 설정해주세요.');
		}
		setToggle(!toggle);
	};

	checkBoxProps.button.onClick = async () => {
		await exportGroup({
			fields: fields,
			order: order.split('-'),
			is_deposit: deposit,
		});
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
			<S.CheckBoxWrapper>
				<S.RowWraper>
					<Checkbox.Group
						value={fields}
						onChange={(e) => {
							setFields(e);
						}}
					>
						{checkBoxProps.fields.items.map((field) => (
							<Checkbox value={field.value}>
								{field.name}
							</Checkbox>
						))}
					</Checkbox.Group>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						onChange={(e) => setOrder(e.target.value)}
						value={order}
					>
						{checkBoxProps.order.items.map((item) => (
							<Radio value={item.value}>{item.name}</Radio>
						))}
					</Radio.Group>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						onChange={(e) => setDeposit(e.target.value)}
						value={deposit}
					>
						{checkBoxProps.deposit.items.map((item) => (
							<Radio value={item.value}>{item.name}</Radio>
						))}
					</Radio.Group>
				</S.RowWraper>
				<S.RowWraper>
					<S.ButtonWrapper>
						<Button type={'primary'}>엑셀 출력</Button>
					</S.ButtonWrapper>
				</S.RowWraper>
				<S.RowWraper>
					<Input.Search
						style={{width: '300px'}}
						onSearch={(e) => {
							setSearch(e);
						}}
					/>
				</S.RowWraper>
				<S.RowWraper>
					<Select
						value={action}
						options={selectProps.options}
						onChange={(e) => setAction(e)}
					/>
					<Button onClick={doAction}>실행</Button>
				</S.RowWraper>
				<Table
					dataSource={group}
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
						title={'입금여부'}
						align={'center'}
						dataIndex={'is_deposit'}
						render={(record) => (record ? '✅' : '❌')}
					/>
					<Table.Column
						align={'center'}
						title={'액션'}
						onChange={(pagination, filters, sorter, extra) => {
							setPage(pagination.current);
							setSorter(sorter);
						}}
						pagination={{
							defaultCurrent: 1,
							total: total,
						}}
						render={(_, record, index) => (
							<Space>
								<Button onClick={() => setSelect(record.id)}>
									수정
								</Button>
								<Button
									onClick={async () => {
										await setGroupDeposit({id: record.id});
										setToggle(!toggle);
									}}
								>
									입금/미입금
								</Button>
								<Button
									onClick={async () => {
										await deleteGroup({id: record.id});
										setToggle(!toggle);
									}}
								>
									삭제
								</Button>
							</Space>
						)}
					/>
				</Table>
			</S.CheckBoxWrapper>
			{select !== 0 && (
				<Modal
					width={'90%'}
					open={true}
					onCancel={() => setSelect(0)}
					footer={[]}
				>
					<ModalGroupForm
						id={select}
						onClick={() => {
							setSelect(0);
							setToggle(!toggle);
						}}
					/>
				</Modal>
			)}
		</S.Container>
	);
};

export default AdminGroup;
