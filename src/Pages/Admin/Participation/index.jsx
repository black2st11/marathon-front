import React, {useEffect, useState} from 'react';
import * as S from './style';
import {checkBoxProps, searchProps, selectProps, tableProps} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Pagination} from '../../../Components/Organism';
import {
	getListParticipation,
	setDepositParticipation,
	setDepositParticipations,
	tempDeleteParticipation,
	tempDeleteParticipations,
} from '../../../api/admin';
import {generateAdminParticipationTable} from '../../../util/generator';
import {setToggleCheck} from '../../../util';

const AdminParticipation = () => {
	const [participation, setParticipation] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [action, setAction] = useState();
	const [search, setSearch] = useState('');
	useEffect(() => {
		(async () => {
			let res = await getListParticipation({page: page});
			if (!res.isSuccess) {
				return;
			}
			setParticipation(res.data.results);
			setTotal(res.data.count);
		})();
	}, [page, toggle]);

	tableProps.trs = generateAdminParticipationTable({
		participations: participation,
		setParticipation: setParticipation,
		depositApi: setDepositParticipation,
		deleteApi: tempDeleteParticipation,
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
		</S.Container>
	);
};

export default AdminParticipation;
