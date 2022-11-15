import React, {useEffect} from 'react';
import * as S from './style';
import {checkBoxProps, searchProps, selectProps, tableProps} from './data';
import {CheckBox, Input, Select, Text, Button} from '../../../Components/Atom';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {Pagination} from '../../../Components/Organism';
import {getListParticipation} from '../../../api/admin';

const AdminParticipation = () => {
	useEffect(() => {
		(async () => {
			let res = await getListParticipation();
			console.log(res);
			if (!res.isSuccess) {
				return;
			}
			let temp = [];
			res.data.results.forEach((item, index) => {
				temp.push([
					{children: index},
					{children: item.name},
					{children: item.group ? '단체' : '개인'},
					{children: item.group ? item.group.name : ''},
					{children: item.bib},
					{
						children: item.group
							? item.group.depositor
							: item.person.depositor,
					},
					{children: item.birth},
					{children: item.course},
					{children: item.gender},
					{children: item.phone},
					{children: item.gift},
					{children: '2002-01-01'},
					{children: item.is_deposit ? '입금' : '미입금'},
					{
						button: {
							text: {
								children: '입금/미입금 처리',
								color: 'white',
							},
						},
					},
					{button: {text: {children: '삭제 처리', color: 'white'}}},
				]);
			});
			console.log(temp);
			tableProps.trs = temp;
		})();
	}, []);

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
				<Input />
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

export default AdminParticipation;
