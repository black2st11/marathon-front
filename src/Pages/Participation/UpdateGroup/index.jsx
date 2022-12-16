import React, {useState, useEffect} from 'react';
import {firstProps, invalidProps, secondProps, thirdProps} from './data';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {GroupTable} from '../../../Components/Organism/GroupForm';
import * as S from './style';
import {Button, Container} from '../../../Components/Atom';
import {
	generateGroupParticipation,
	setAddGroup,
	setForm,
	setGroupDelete,
	setGroupForm,
	setToggleCheck,
	setWarnText,
} from '../../../util';
import {isValidate} from '../../../util/validator';
import {
	getListGroupParticipation,
	updateGroupParticipation,
} from '../../../api';
import {tdProps} from '../../common';
import {TopWRapper} from '../Person';
import {thirdProgress} from '../../../config/images';
import {useDaumPostcodePopup} from 'react-daum-postcode';

const setInfoData = ({setState, data}) => {
	let group = data;
	let births = group.birth.split('-');
	let phones = group.phone.split('-');
	setState({
		...group,
		year: births[0],
		month: births[1],
		day: births[2],
		phone1: phones[0],
		phone2: phones[1],
		phone3: phones[2],
		email: group.email ? group.email : '',
	});

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

	secondProps.tabletFee.items[0][0].content.children = group.deposit_amount;
	secondProps.tabletFee.items[0][1].content.children = group.is_deposit
		? '입금'
		: '미입금';
};

const setGroupData = ({setState, data}) => {
	let participations = data.participation;
	let trKey = ['name', 'gender', 'birth', 'phone', 'course', 'gift'];
	let trs = [];
	let groups = [];
	participations.forEach((participation, index, array) => {
		let tr = [];
		let splitted_phone = participation.phone.split('-');

		tr.push({...tdProps, children: index + 1});
		trKey.forEach((key) => {
			tr.push({...tdProps, children: participation[key]});
		});
		trs.push(tr);
		groups.push({
			check: false,
			name: participation.name,
			gender: participation.gender,
			birth: `${participation.birth.split('-').join('')}`,
			phone1: splitted_phone[0],
			phone2: splitted_phone[1],
			phone3: splitted_phone[2],
			course: participation.course,
			gift: participation.gift,
			deposited: participation.deposited,
			created: participation.created,
		});
	});
	setState(groups);
	secondProps.groups.trs = trs;
};

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
			created: '',
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
			created: '',
		},
	]);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);
	const [isAllCheck, setIsAllCheck] = useState(false);
	const open = useDaumPostcodePopup();

	const handleComplete = (data) => {
		let post_number = data.zonecode;
		let address = data.address;

		setInfo({
			...info,
			post_number,
			address,
		});
	};

	const handleClick = () => {
		open({onComplete: handleComplete});
	};
	useEffect(() => {
		(async () => {
			let name = sessionStorage.getItem('name');
			let representative = sessionStorage.getItem('representative');
			let phone = sessionStorage.getItem('phone');

			if (name && representative && phone) {
				let res = await getListGroupParticipation({
					name,
					representative,
					phone,
				});
				if (res.data.count === 1) {
					setInfoData({setState: setInfo, data: res.data.results[0]});
					setGroupData({
						setState: setGroup,
						data: res.data.results[0],
					});

					setSection(1);
				}
			}
		})();
	}, []);

	useEffect(() => {
		let check = true;
		group.forEach((item) => {
			check = check && item.check;
		});
		setIsAllCheck(check);
	}, [group]);

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
			setInfoData({setState: setInfo, data: res.data.results[0]});
			setGroupData({setState: setGroup, data: res.data.results[0]});

			setSection(1);
		}
	};
	secondProps.button.onClick = () => {
		if (info.is_deposit) {
			return alert('입금확인 후에는 변경이 불가합니다.');
		}
		setSection(2);
	};

	thirdProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	thirdProps.group.trs = setGroupForm(group, setGroup);
	thirdProps.group.addBtn.onClick = () => setAddGroup(group, setGroup);
	thirdProps.group.deleteBtn.onClick = () => setGroupDelete(group, setGroup);
	thirdProps.group.checkBtn.onClick = () =>
		setToggleCheck(group, setGroup, setIsAllCheck, true);
	thirdProps.group.ths[0].onChange = () =>
		setToggleCheck(group, setGroup, setIsAllCheck);
	thirdProps.group.ths[0].value = isAllCheck;
	thirdProps.inputs[3].button.onClick = () => handleClick();
	thirdProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await updateGroupParticipation({
				...info,
				birth: `${info.year}-${info.month}-${info.day}`,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				participation: generateGroupParticipation(group),
			});
			if (!res.isSuccess) {
			}
			setInfo({
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
			setGroup([
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
			sessionStorage.removeItem('name');
			sessionStorage.removeItem('representative');
			sessionStorage.removeItem('phone');
			setSection(0);
		}
	};

	return (
		<Container>
			<TopWRapper>
				<BreadCrumb
					depths={[
						'HOME',
						'참가신청 하기',
						'단체 참가신청 조회/수정',
					]}
				/>
				{section === 1 && <img src={thirdProgress} />}
			</TopWRapper>

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
		</Container>
	);
};

export default UpdateGroup;
