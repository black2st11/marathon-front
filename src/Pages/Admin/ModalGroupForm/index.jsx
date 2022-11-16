import React, {useState, useEffect} from 'react';
import * as S from './style';
import {groupProps, participationProps} from './data';
import {Input, Select, Text} from '../../../Components/Atom';
import {MultipleInput} from '../../../Components/Organism/InputForm';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import {getGroup} from '../../../api/admin';

const GroupFormGenerate = ({props}) => {
	switch (props.type) {
		case 'input':
			return (
				<S.Wrapper>
					<Text {...props.text} />
					<Input {...props.item} />
				</S.Wrapper>
			);
		case 'inputs':
			return (
				<S.Wrapper>
					<Text {...props.text} />
					<S.RowWrapper>
						<MultipleInput inputs={props.item} />
					</S.RowWrapper>
				</S.Wrapper>
			);
		case 'selects':
			return (
				<S.Wrapper>
					<Text {...props.text} />
					<S.RowWrapper>
						{props.item.map((item) => (
							<Select {...item} />
						))}
					</S.RowWrapper>
				</S.Wrapper>
			);
		default:
			return null;
	}
};

const ModalGroupForm = ({id, onClick}) => {
	const [group, setGroup] = useState({});
	const [participation, setParticipation] = useState([]);

	useEffect(() => {
		(async () => {
			let res = await getGroup({id});
			let data = res.data;
			let participation_data = data.participation;
			let splitted_phone = res.data.phone.split('-');
			let splitted_birth = res.data.birth.split('-');

			setGroup({
				name: data.name,
				representative: data.representative,
				year: splitted_birth[0],
				month: splitted_birth[1],
				day: splitted_birth[2],
				phone1: splitted_phone[0],
				phone2: splitted_phone[1],
				phone3: splitted_phone[2],
				post_number: data.post_number,
				address: data.address,
				detail_address: data.detail_address,
				depositor: data.depositor,
			});

			let temp = [];
			participation_data.forEach((item) => {
				let splitted_phone = item.phone.split('-');
				temp.push({
					...item,
				});
			});
		})();
	}, []);

	groupProps.items.forEach((item) => {
		if (item.type === 'input') {
			item.item.onChange = (e) =>
				setGroup({...group, [e.target.name]: e.target.value});
			item.item.value = group[item.item.name];
		} else if (item.type === 'inputs') {
			item.item.forEach((input) => {
				input.onChange = (e) =>
					setGroup({...group, [e.target.name]: e.target.value});
				input.value = group[input.name];
			});
		} else if (item.type === 'selects') {
			item.item.forEach((select) => {
				select.onChange = (e) =>
					setGroup({...group, [e.target.name]: e.target.value});
				select.value = group[select.name];
			});
		}
	});

	return (
		<S.Container>
			{groupProps.items.map((groupItem) => (
				<GroupFormGenerate props={groupItem} />
			))}
			<GroupTable {...participationProps} />
		</S.Container>
	);
};

export default ModalGroupForm;
