import React, {useState} from 'react';
import * as S from './style';
import {firstProps, secondProps, thirdProps, invalidProps} from './data';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {PersonForm} from '../../../Components/Template';
import {setForm, setWarnText} from '../../../util';
import {Button} from '../../../Components/Atom';
import {isValidate} from '../../../util/validator';
import {
	getListPersonParticipation,
	updatePersonParticipation,
} from '../../../api';
import {initialInfo} from '../UpdateVolunteer/data';

const UpdatePerson = () => {
	const [info, setInfo] = useState({
		name: '',
		phone1: '',
		phone2: '',
		phone3: '',
		year: '',
		month: '',
		day: '',
		gender: '',
		post_number: '',
		address: '',
		detail_address: '',
		email: '',
		depositor: '',
		course: '',
		gift: '',
	});
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);

	const firstInfo = {
		name: info.name,
		year: info.year,
		month: info.month,
		day: info.day,
	};
	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	thirdProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = async () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			let res = await getListPersonParticipation({
				name: info.name,
				birth: `${info.year}-${info.month}-${info.day}`,
			});
			console.log(res.data);
			if (res.data.count !== 1) {
				return alert('해당하는 신청서가 없습니다.');
			}
			let person = res.data.results[0];
			let participation = person.participation;

			secondProps.info.map((info) => {
				info.forEach((item) => {
					switch (item.key) {
						case 'name':
							item.content.children = participation.name;
							break;
						case 'course':
							item.content.children = `${participation.course} ${participation.gender}부`;
							break;
						case 'depositor':
							item.content.children = person.depositor;
							break;
						case 'address':
							item.content.children = `${person.address} ${person.detail_address}`;
							break;
						case 'birth':
							item.content.children = `${participation.birth}`;
							break;
						case 'email':
							item.content.children = person.email;
							break;
						case 'phone':
							item.content.children = participation.phone;
							break;
						default:
							break;
					}
				});
			});

			let splitted_birth = participation.birth.split('-');
			let splitted_phone = participation.phone.split('-');
			setInfo({
				...participation,
				...person,
				year: splitted_birth[0],
				month: splitted_birth[1],
				day: splitted_birth[2],
				phone1: splitted_phone[0],
				phone2: splitted_phone[1] ? splitted_phone[1] : '',
				phone3: splitted_phone[2] ? splitted_phone[2] : '',
			});
			secondProps.fee.items[0][1].content.children =
				participation.is_deposit ? '입금' : '미입금';
			secondProps.tabletFee.items[0][1].content.children =
				participation.is_deposit ? '입금' : '미입금';
			setSection(1);
		}
	};
	console.log(info);
	secondProps.button.onClick = () => {
		setSection(2);
	};

	thirdProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await updatePersonParticipation({
				...info,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				birth: `${info.year}-${info.month}-${info.day}`,
			});
			if (!res.isSuccess) {
				return alert('실패했습니다.');
			}
			setSection(0);
			setInfo(initialInfo);
		}
	};

	return (
		<React.Fragment>
			{section === 0 && (
				<S.FirstSection>
					<S.CardContentWrapper>
						<CardContent {...firstProps.cardContent} />
					</S.CardContentWrapper>
					<PersonForm {...firstProps} />
				</S.FirstSection>
			)}
			{section === 1 && (
				<S.SecondSection>
					<S.TableWrapper>
						<SelectTable items={secondProps.info} />
					</S.TableWrapper>
					<S.CardContentWrapper>
						<CardContent {...secondProps.cardContent} />
					</S.CardContentWrapper>
					<S.TableWrapper>
						<SelectTable {...secondProps.fee} />
						<SelectTable {...secondProps.tabletFee} />
					</S.TableWrapper>
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

export default UpdatePerson;
