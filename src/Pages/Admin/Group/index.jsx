import React, {useEffect, useState} from 'react';
import * as S from './style';
import {
	checkBoxProps,
	searchProps,
	selectProps,
	tableProps,
	orderInit,
	depositInit,
} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Modal, Pagination} from '../../../Components/Organism';
import {
	deleteGroup,
	deleteGroups, exportGroup, exportParticipation,
	getListGroup,
	setGroupDeposit,
	setGroupDeposits,
} from '../../../api/admin';
import {generateAdminGroupTable} from '../../../util/generator';
import {ModalGroupForm} from '../index';
import {setToggleCheck} from '../../../util';
import {checkBinding} from '../../../util/binding';
import {dictToList, dictToStr} from "../../../util/postProcess";

const AdminGroup = () => {
	const [group, setGroup] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState();
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState({});
	const [order, setOrder] = useState(orderInit);
	const [deposit, setDeposit] = useState(depositInit);
	const [modal, setModal] = useState(false);
	const [select, setSelect] = useState(0);

	useEffect(() => {
		(async () => {
			let res = await getListGroup({page: page});
			if (!res.isSuccess) {
				return;
			}
			setGroup(res.data.results);
			setTotal(res.data.count);
		})();
	}, [page, toggle]);
	tableProps.trs = generateAdminGroupTable({
		groups: group,
		setGroup: setGroup,
		depositApi: setGroupDeposit,
		deleteApi: deleteGroup,
		current: page,
		total: total,
		setToggle: setToggle,
		toggle: toggle,
		setSelect,
		setModal,
	});
	tableProps.ths[0].onChange = () => {
		setToggleCheck(group, setGroup, setIsAllCheck);
	};
	tableProps.ths[0].value = isAllCheck;

	searchProps.button.onClick = async () => {
		let res = await getListGroup({page, search});
		setGroup(res.data.results);
	};

	selectProps.select.onChange = (e) => {
		setAction(e.target.value);
	};
	selectProps.button.onClick = async () => {
		let ids = [];
		group.forEach((item) => {
			if (item.check) {
				ids.push(item.id);
			}
		});
		if (action === 'set_deposit') {
			await setGroupDeposits({ids, is_deposit: true});
		} else if (action === 'unset_deposit') {
			await setGroupDeposits({ids, is_deposit: false});
		} else if (action === 'delete') {
			await deleteGroups({ids});
		}
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
		items: checkBoxProps.deposit.items,
		props: deposit,
		setProps: setDeposit,
		defaultProps: depositInit,
	});

	checkBoxProps.button.onClick = async () => {
		let field = dictToList({dict: fields});
		let ord = dictToStr({dict: order, defaultValue: 'id'});
		let depo = dictToStr({dict: deposit, defaultValue: 'all'});

		await exportGroup({
			fields: field,
			order: ord.split('-'),
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
			<S.TableWrapper>
				<GroupTable {...tableProps} />
			</S.TableWrapper>
			<S.PaginationWrapper>
				<Pagination />
			</S.PaginationWrapper>
			{modal && (
				<Modal bottomText={' '} onClose={() => setModal(false)}>
					<ModalGroupForm
						id={select}
						onClick={() => {
							setModal(false);
							setToggle(!toggle);
						}}
					/>
				</Modal>
			)}
		</S.Container>
	);
};

export default AdminGroup;
