import React, {useEffect, useState} from 'react';
import * as S from './style';
import {checkBoxProps, searchProps, selectProps, tableProps} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Modal, Pagination} from '../../../Components/Organism';
import {orderInit} from '../Participation/data';
import {
	deleteVolunteer,
	deleteVolunteers,
	getListParticipation,
	getListVolunteer,
	setDepositParticipation,
	setDepositParticipations,
	tempDeleteParticipation,
	tempDeleteParticipations,
} from '../../../api/admin';
import {
	generateAdminParticipationTable,
	generateAdminVolunteerTable,
} from '../../../util/generator';
import {setToggleCheck} from '../../../util';
import {ModalGroupForm, ModalPersonForm} from '../index';
import ModalVolunteerForm from '../ModalVolunteerForm';

const AdminVolunteer = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState();
	const [search, setSearch] = useState('');
	const [fields, setFields] = useState({});
	const [order, setOrder] = useState(orderInit);
	const [select, setSelect] = useState(0);
	const [modal, setModal] = useState(false);
	useEffect(() => {
		(async () => {
			let res = await getListVolunteer({page: page});
			if (!res.isSuccess) {
				return;
			}
			setParticipation(res.data.results);
			setTotal(res.data.count);
		})();
	}, [page, toggle]);

	tableProps.trs = generateAdminVolunteerTable({
		participations: participation,
		setParticipation: setParticipation,
		deleteApi: deleteVolunteer,
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
		if (action === 'delete') {
			await deleteVolunteers({ids, is_deposit: true});
		}
	};

	searchProps.button.onClick = async () => {
		let res = await getListVolunteer({page, search});
		setParticipation(res.data.results);
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
				<Pagination
					current={page}
					total={total}
					pageSize={10}
					onClick={(e) => setPage(e)}
				/>
			</S.PaginationWrapper>
			{modal && (
				<Modal bottomText={' '} onClose={() => setModal(false)}>
					<ModalVolunteerForm
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

export default AdminVolunteer;
