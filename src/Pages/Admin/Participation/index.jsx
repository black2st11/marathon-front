import React, {useEffect, useState} from 'react';
import * as S from './style';
import {
	categoryInit,
	checkBoxProps,
	depositFilter,
	depositInit,
	genderFilter,
	orderInit,
	searchProps,
	selectProps,
	tableProps,
} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Modal, Pagination} from '../../../Components/Organism';
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

const AdminParticipation = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState();
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState({});
	const [order, setOrder] = useState(orderInit);
	const [category, setCategory] = useState(categoryInit);
	const [deposit, setDeposit] = useState(depositInit);
	const [modal, setModal] = useState(false);
	const [select, setSelect] = useState({id: 0, category: 'person'});
	const [filter, setFilter] = useState({gender: '', is_deposit: ''});

	useEffect(() => {
		(async () => {
			let res = await getListParticipation({page: page, filter});
			if (!res.isSuccess) {
				return;
			}
			setParticipation(res.data.results);
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

	selectProps.select.onChange = (e) => {
		setAction(e.target.value);
	};
	selectProps.button.onClick = async () => {
		let ids = [];
		participation.forEach((item) => {
			if (item.check) {
				ids.push(item.id);
			}
		});
		if (action === 'set_deposit') {
			await setDepositParticipations({ids, is_deposit: true});
		} else if (action === 'unset_deposit') {
			await setDepositParticipations({ids, is_deposit: false});
		} else if (action === 'delete') {
			await tempDeleteParticipations({ids});
		}
	};

	searchProps.button.onClick = async () => {
		let res = await getListParticipation({page, search});
		setParticipation(res.data.results);
	};

	checkBinding({
		items: checkBoxProps.fields.items,
		props: fields,
		setProps: setFields,
	});

	checkBinding({
		items: checkBoxProps.order.items,
		props: order,
		setProps: setOrder,
		defaultProps: orderInit,
	});

	checkBinding({
		items: checkBoxProps.category.items,
		props: category,
		setProps: setCategory,
		defaultProps: categoryInit,
	});

	checkBinding({
		items: checkBoxProps.deposit.items,
		props: deposit,
		setProps: setDeposit,
		defaultProps: depositInit,
	});

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

	return (
		<S.Container>
			<S.CheckBoxWrapper>
				{checkBoxProps.availableList.map((key) => (
					<S.RowWraper>
						<S.CheckTitle>
							<Text {...checkBoxProps[key].title} />
						</S.CheckTitle>
						{checkBoxProps[key].items.map((item) => (
							<S.CheckBoxContent>
								<CheckBox {...item.checkBox} />
								<Text {...item.text} />
							</S.CheckBoxContent>
						))}
					</S.RowWraper>
				))}
			</S.CheckBoxWrapper>
			<S.ButtonWrapper>
				<Button {...checkBoxProps.button} />
			</S.ButtonWrapper>
			<S.SearchWrapper>
				<Input
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<Button {...searchProps.button} />
			</S.SearchWrapper>
			<S.ActionWrapper>
				<Select {...selectProps.select} />
				<Button {...selectProps.button} />
			</S.ActionWrapper>
			<Select
				onChange={(e) =>
					setFilter({...filter, is_deposit: e.target.value})
				}
				options={depositFilter}
			/>
			<Select
				onChange={(e) => setFilter({...filter, gender: e.target.value})}
				options={genderFilter}
			/>
			<S.TableWrapper>
				<GroupTable {...tableProps} />
			</S.TableWrapper>
			<S.PaginationWrapper>
				<Pagination
					current={page}
					total={total}
					pageSize={10}
					onClick={(e) => setPage(e)}
				/>
			</S.PaginationWrapper>
			{modal && (
				<Modal bottomText={' '} onClose={() => setModal(false)}>
					{select.category === 'person' ? (
						<ModalPersonForm
							person={select.id}
							onClick={() => {
								setModal(false);
								setToggle(!toggle);
							}}
						/>
					) : (
						<ModalGroupForm
							id={select.id}
							onClick={() => {
								setModal(false);
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
