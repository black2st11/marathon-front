import React, {useEffect, useState} from 'react';
import * as S from './style';
import {
	categoryInit,
	checkBoxProps,
	columns,
	depositFilter,
	depositInit,
	genderFilter,
	orderInit,
	searchProps,
	selectProps,
	tableProps,
} from './data';
import {
	Radio,
	Checkbox,
	Button,
	Input,
	Select,
	Table,
	Space,
	Button as AntdButton,
	Modal,
} from 'antd';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Pagination} from '../../../Components/Organism';
import {
	exportParticipation,
	getListParticipation,
	setDepositParticipation,
	setDepositParticipations,
	tempDeleteParticipation,
	tempDeleteParticipations,
} from '../../../api/admin';
import {generateAdminParticipationTable} from '../../../util/generator';
import {setToggleCheck} from '../../../util';
import {checkBinding} from '../../../util/binding';
import {dictToList, dictToStr} from '../../../util/postProcess';
import {ModalGroupForm, ModalPersonForm} from '../index';
import {deleteBoard} from '../../../api/board';

const AdminParticipation = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState('');
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState([]);
	const [order, setOrder] = useState('id');
	const [category, setCategory] = useState(categoryInit);
	const [isDeposit, setIsDeposit] = useState('all');
	const [kind, setKind] = useState('all');
	const [deposit, setDeposit] = useState(depositInit);
	const [modal, setModal] = useState(false);
	const [select, setSelect] = useState({id: 0, category: 'person'});
	const [filter, setFilter] = useState({gender: '', is_deposit: ''});
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	useEffect(() => {
		(async () => {
			let res = await getListParticipation({page: page, filter});
			if (!res.isSuccess) {
				return;
			}
			let data = res.data.results.map((item, idx) => {
				item.no = res.data.count - (page - 1) * 10 - idx;
				item.key = item.id;
				return item;
			});
			setParticipation(data);
			setTotal(res.data.count);
		})();
	}, [page, toggle, filter]);

	tableProps.trs = generateAdminParticipationTable({
		participations: participation,
		setParticipation: setParticipation,
		depositApi: setDepositParticipation,
		deleteApi: tempDeleteParticipation,
		current: page,
		total: total,
		setToggle: setToggle,
		toggle: toggle,
		setSelect,
		setModal,
	});
	tableProps.ths[0].onChange = () => {
		setToggleCheck(participation, setParticipation, setIsAllCheck);
	};
	tableProps.ths[0].value = isAllCheck;

	checkBoxProps.button.onClick = async () => {
		let field = dictToList({dict: fields});
		let ord = dictToStr({dict: order, defaultValue: 'id'});
		let cate = dictToStr({dict: category, defaultValue: 'all'});
		let depo = dictToStr({dict: deposit, defaultValue: 'all'});

		await exportParticipation({
			fields: field,
			order: ord.split('-'),
			category: cate,
			is_deposit: depo,
		});
	};

	const doAction = async () => {
		switch (action) {
			case 'delete':
				await tempDeleteParticipations({ids: selectedRowKeys});
				break;
			case 'set_deposit':
				await setDepositParticipations({
					ids: selectedRowKeys,
					is_deposit: true,
				});
				break;
			case 'unset_deposit':
				await setDepositParticipations({
					ids: selectedRowKeys,
					is_deposit: false,
				});
				break;
			default:
				alert('액션을 선택해주세요.');
		}
		setToggle(!toggle);
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
						<Radio value='id'>입력순</Radio>
						<Radio value='gender-name'>
							성별(1순위) + 이름(2순위)
						</Radio>
						<Radio value='course-gender-name'>
							종목(1순위) + 성별(2순위) + 이름(3순위)
						</Radio>
						<Radio value='course-group__name-gender'>
							종목(1순위) + 단체(2순위) + 성별(3순위)
						</Radio>
					</Radio.Group>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						onChange={(e) => {
							setIsDeposit(e.target.value);
						}}
						value={isDeposit}
					>
						<Radio value={'all'}>전체</Radio>
						<Radio value={'deposit'}>입금</Radio>
						<Radio value={'no-deposit'}>미입금</Radio>
					</Radio.Group>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						onChange={(e) => {
							setKind(e.target.value);
						}}
						value={kind}
					>
						<Radio value={'all'}>전체</Radio>
						<Radio value={'group'}>단체</Radio>
						<Radio value={'person'}>개인</Radio>
					</Radio.Group>
				</S.RowWraper>
				<Button type={'primary'} style={{width: '200px'}}>
					엑셀 출력
				</Button>
			</S.CheckBoxWrapper>
			<S.CheckBoxWrapper>
				<S.RowWraper>
					<Input.Search onSearch={(e) => setSearch(e)} />
				</S.RowWraper>
				<S.RowWraper>
					<Select
						value={action}
						style={{width: '200px'}}
						options={selectProps.options}
						onChange={(e) => setAction(e)}
					/>
					<Button onClick={doAction}>실행</Button>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						optionType='button'
						onChange={(e) =>
							setFilter({...filter, is_deposit: e.target.value})
						}
						options={depositFilter}
						value={filter.is_deposit}
					/>
				</S.RowWraper>
				<S.RowWraper>
					<Radio.Group
						optionType='button'
						onChange={(e) =>
							setFilter({...filter, gender: e.target.value})
						}
						options={genderFilter}
						value={filter.gender}
					/>
				</S.RowWraper>
			</S.CheckBoxWrapper>
			<Table
				scroll={{x: 1300}}
				rowSelection={{
					selectedRowKeys,
					onChange: (e) => {
						console.log(e);
						setSelectedRowKeys(e);
					},
				}}
				style={{margin: '1rem'}}
				dataSource={participation}
			>
				{columns.map((column) => (
					<Table.Column
						align={'center'}
						title={column.title}
						dataIndex={column.dataIndex}
					/>
				))}
				<Table.Column
					title={'입금여부'}
					align={'center'}
					dataIndex={'is_deposit'}
					render={(record) => (record ? '✅' : '❌')}
				/>
				<Table.Column
					title={'액션'}
					key={'action'}
					align={'center'}
					render={(_, record) => (
						<Space size='small'>
							<AntdButton
								onClick={() => {
									setSelect({
										id: record.group
											? record.group.id
											: record.person.id,
										category: record.group
											? 'group'
											: 'person',
									});
								}}
							>
								수정
							</AntdButton>
							<AntdButton
								onClick={async () => {
									await setDepositParticipation({
										id: record.id,
									});
									setToggle(!toggle);
								}}
							>
								입금
							</AntdButton>
							<AntdButton
								onClick={async () => {
									await tempDeleteParticipation({
										id: record.id,
									});
									setToggle(!toggle);
								}}
							>
								삭제
							</AntdButton>
						</Space>
					)}
				/>
			</Table>
			{select.id !== 0 && (
				<Modal
					open={true}
					onCancel={() => {
						setSelect({...select, id: 0});
					}}
					footer={[]}
				>
					{select.category === 'person' ? (
						<ModalPersonForm
							person={select.id}
							onClick={() => {
								setSelect({...select, id: 0});
								setToggle(!toggle);
							}}
						/>
					) : (
						<ModalGroupForm
							id={select.id}
							onClick={() => {
								setSelect({...select, id: 0});
								setToggle(!toggle);
							}}
						/>
					)}
				</Modal>
			)}
		</S.Container>
	);
};

export default AdminParticipation;
