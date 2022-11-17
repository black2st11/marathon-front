import React, {useEffect, useState} from 'react';
import * as S from './style';
import {checkBoxProps, searchProps, selectProps, tableProps} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Pagination} from '../../../Components/Organism';
import {
	deleteParticipation,
	deleteParticipations,
	getListDeletedParticipation,
	getListParticipation,
	recoverParticipation,
	recoverParticipations,
	setDepositParticipation,
	setDepositParticipations,
	tempDeleteParticipation,
	tempDeleteParticipations,
} from '../../../api/admin';
import {
	generateAdminDeletedParticipationTable,
	generateAdminParticipationTable,
} from '../../../util/generator';
import {setToggleCheck} from '../../../util';

const AdminDeletedParticipation = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState();
	const [search, setSearch] = useState('');

	useEffect(() => {
		(async () => {
			let res = await getListDeletedParticipation({page: page});
			if (!res.isSuccess) {
				return;
			}
			setParticipation(res.data.results);
			setTotal(res.data.count);
		})();
	}, [page, toggle]);

	tableProps.trs = generateAdminDeletedParticipationTable({
		participations: participation,
		setParticipation: setParticipation,
		recoverApi: recoverParticipation,
		deleteApi: deleteParticipation,
		current: page,
		total: total,
		setToggle: setToggle,
		toggle: toggle,
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
			await deleteParticipations({ids});
		} else if (action === 'recover') {
			await recoverParticipations({ids});
		}
	};

	searchProps.button.onClick = async () => {
		let res = await getListDeletedParticipation({page, search});
		setParticipation(res.data.results);
	};
	return (
		<S.Container>
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
		</S.Container>
	);
};

export default AdminDeletedParticipation;
