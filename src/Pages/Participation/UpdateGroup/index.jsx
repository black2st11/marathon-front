import React, {useState} from 'react';
import {firstProps, invalidProps, secondProps, thirdProps} from './data';
import {PersonForm} from '../../../Components/Template';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import * as S from './style';
import {Button} from '../../../Components/Atom';
import {setForm, setGroupForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {
	getListGroupParticipation,
	updateGroupParticipation,
} from '../../../api';
import {tdProps} from '../../common';
const UpdateGroup = () => {
	const [info, setInfo] = useState({
		name: '',
		representative: '',
		year: '',
		month: '',
		day: '',
		post_number: '',
		address: '',
		detail_address: '',
		email: '',
		phone1: '',
		phone2: '',
		phone3: '',
		depositor: '',
	});
	const [group, setGroup] = useState([
		{
			check: false,
			name: '',
			gender: '',
			birth: '',
			phone1: '',
			phone2: '',
			phone3: '',
			course: '',
			gift: '',
		},
		{
			check: false,
			name: '',
			gender: '',
			birth: '',
			phone1: '',
			phone2: '',
			phone3: '',
			course: '',
			gift: '',
		},
	]);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);

	let firstInfo = {
		name: info.name,
		representative: info.representative,
		phone1: info.phone1,
		phone2: info.phone2,
		phone3: info.phone3,
	};
	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = async () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			let res = await getListGroupParticipation({
				name: info.name,
				representative: info.representative,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
			});

			if (res.data.length === 0) {
				alert('신청서가 존재하지 않습니다.');
			}
			let group = res.data[0];
			let participations = group.participation;
			secondProps.info.forEach((info) => {
				info.forEach((item) => {
					switch (item.key) {
						case 'name':
							item.content.children = group.name;
							break;
						case 'birth':
							item.content.children = group.birth;
							break;
						case 'phone':
							item.content.children = group.phone;
							break;
						case 'representative':
							item.content.children = group.representative;
							break;
						case 'email':
							item.content.children = group.email;
							break;
						case 'depositor':
							item.content.children = group.depositor;
							break;
						case 'address':
							item.content.children = `${group.address} ${group.detail_address}`;
							break;
						case 'count':
							item.content.children = participations.length;
							break;
						default:
							break;
					}
				});
			});

			secondProps.fee.items[0][0].content.children = group.deposit_amount;
			secondProps.fee.items[0][1].content.children = group.is_deposit
				? '입금'
				: '미입금';

			secondProps.tabletFee.items[0][0].content.children =
				group.deposit_amount;
			secondProps.tabletFee.items[0][1].content.children =
				group.is_deposit ? '입금' : '미입금';
			let trKey = ['name', 'gender', 'birth', 'phone', 'course', 'gift'];
			let trs = [];
			let groups = [];
			participations.map((participation, index, array) => {
				let tr = [];
				let group = [];
				let splitted_phone = participation.phone.split('-');

				group.push({
					...participation,
					check: false,
					phone1: splitted_phone[0],
					phone2: splitted_phone[1],
					phone3: splitted_phone[2],
				});
				tr.push({...tdProps, children: index + 1});
				trKey.forEach((key) => {
					tr.push({...tdProps, children: participation[key]});
				});
				trs.push(tr);
				groups.push(group);
			});
			setGroup(groups);
			secondProps.groups.trs = trs;

			setSection(1);
		}
	};

	secondProps.button.onClick = () => {
		setSection(2);
	};

	thirdProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	thirdProps.group.trs = setGroupForm(group, setGroup);

	thirdProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await updateGroupParticipation({...info});
			if (!res.isSuccess) {
				alert('error occurred');
			}
		}
	};

	return (
		<React.Fragment>
			{section === 0 && (
				<S.FirstSection>
					<PersonForm {...firstProps} />
				</S.FirstSection>
			)}
			{section === 1 && (
				<S.SecondSection>
					<S.TableWrapper>
						<SelectTable items={secondProps.info} />
					</S.TableWrapper>
					<S.CardContentWrapper>
						<CardContent {...secondProps.cardcontent} />
					</S.CardContentWrapper>
					<S.TableWrapper>
						<SelectTable {...secondProps.fee} />
						<SelectTable {...secondProps.tabletFee} />
					</S.TableWrapper>
					<S.GroupWrapper>
						<GroupTable {...secondProps.groups} />
					</S.GroupWrapper>
					<S.ButtonWrapper>
						<Button {...secondProps.button} />
					</S.ButtonWrapper>
				</S.SecondSection>
			)}
			{section === 2 && (
				<S.ThirdSection>
					<PersonForm {...thirdProps} />
				</S.ThirdSection>
			)}
		</React.Fragment>
	);
};

export default UpdateGroup;
