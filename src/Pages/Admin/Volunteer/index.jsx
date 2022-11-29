import React, {useEffect, useState} from 'react';
import * as S from './style';
import {
	actionOptions,
	checkBoxProps,
	columns,
	participatedFilter,
	searchProps,
	selectProps,
	tableProps,
} from './data';
import {orderInit} from '../Participation/data';
import {
	deleteVolunteer,
	deleteVolunteers,
	exportVolunteer,
	getListVolunteer,
} from '../../../api/admin';
import ModalVolunteerForm from '../ModalVolunteerForm';
import {dictToList, dictToStr} from '../../../util/postProcess';
import {
	Checkbox,
	Radio,
	Select,
	Input,
	Button,
	Table,
	Space,
	Modal,
} from 'antd';

const AdminVolunteer = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [ordering, setOrdering] = useState('');
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState('');
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState([]);
	const [order, setOrder] = useState(orderInit);
	const [select, setSelect] = useState(0);
	const [modal, setModal] = useState(false);
	const [filter, setFilter] = useState({participated: ''});
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	useEffect(() => {
		(async () => {
			let res = await getListVolunteer({page, filter, search, ordering});
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
	}, [page, toggle, filter, search, ordering]);

	const doAction = async () => {
		switch (action) {
			case 'delete':
				await deleteVolunteers({ids: selectedRowKeys});
				break;
			default:
				return alert('액션을 설정해주세요');
		}
		setToggle(!toggle);
	};

	checkBoxProps.button.onClick = async () => {
		let field = dictToList({dict: fields});
		let ord = dictToStr({dict: order, defaultValue: 'id'});

		await exportVolunteer({
			fields: field,
			order: ord.split('-'),
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
				<S.ButtonWrapper>
					<Button type={'primary'}>엑셀 출력</Button>
				</S.ButtonWrapper>
				<S.RowWraper>
					<Input.Search
						style={{width: '300px'}}
						onSearch={(e) => setSearch(e)}
						value={search}
					/>
				</S.RowWraper>
				<S.RowWraper>
					<Select
						options={actionOptions}
						value={action}
						onChange={(e) => setAction(e.target.value)}
					/>
					<Button onClick={doAction}>실행</Button>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						onChange={(e) => {
							setFilter({
								...filter,
								participated: e.target.value,
							});
						}}
						optionType={'button'}
						options={participatedFilter}
					/>
				</S.RowWraper>
				<Table
					scroll={{x: 1300}}
					rowSelection={{
						selectedRowKeys,
						onChange: (e) => {
							setSelectedRowKeys(e);
						},
					}}
					dataSource={participation}
					onChange={(pagination, filters, sorter, extra) => {
						setPage(pagination.current);
						setSorter(sorter);
					}}
					pagination={{
						defaultCurrent: 1,
						total: total,
					}}
				>
					{columns.map((col) => (
						<Table.Column align={'center'} {...col} />
					))}
					<Table.Column
						title={'액션'}
						align={'center'}
						render={(_, record, idx) => (
							<Space>
								<Button onClick={() => setSelect(record.id)}>
									수정
								</Button>
								<Button
									onClick={async () => {
										await deleteVolunteer({
											id: record.id,
										});
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
				<Modal onCancel={() => setSelect(0)} footer={[]} open={true}>
					<ModalVolunteerForm
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

export default AdminVolunteer;
