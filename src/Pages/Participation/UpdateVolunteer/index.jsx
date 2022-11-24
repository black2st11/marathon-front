import React, {useState, useEffect} from 'react';
import * as S from './style';
import {
	firstProps,
	initialInfo,
	invalidProps,
	secondProps,
	thirdProps,
} from './data';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {Button, Container} from '../../../Components/Atom';
import {getListVolunteer, updateVolunteer} from '../../../api';

const setData = ({setState, data}) => {
	secondProps.items.map((items) => {
		items.forEach((item) => {
			if (item.key === 'class_name') {
				item.content.children = `${data['grade']}학년${
					data[item.key]
				}반`;
			} else {
				item.content.children = data[item.key];
			}
		});
	});
	let splitted_birth = data.birth.split('-');
	let splitted_phone = data.phone.split('-');
	setState({
		...data,
		year: splitted_birth[0],
		month: splitted_birth[1],
		day: splitted_birth[2],
		phone1: splitted_phone[0] ? splitted_phone[0] : '',
		phone2: splitted_phone[1] ? splitted_phone[1] : '',
		phone3: splitted_phone[2] ? splitted_phone[2] : '',
	});
};

const UpdateVolunteer = () => {
	const [info, setInfo] = useState(initialInfo);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);

	useEffect(() => {
		(async () => {
			let name = sessionStorage.getItem('name');
			let phone = sessionStorage.getItem('phone');

			let res = await getListVolunteer({
				name,
				phone,
			});
			if (res.data.count === 1) {
				setData({setState: setInfo, data: res.data.results[0]});
				setSection(1);
			}
		})();
	}, []);

	const firstInfo = {
		name: info.name,
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
			let res = await getListVolunteer({
				name: info.name,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
			});
			if (res.data.count !== 1) {
				return alert('일치하는 신청서가 없습니다.');
			}
			setData({setState: setInfo, data: res.data.results[0]});
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

	thirdProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await updateVolunteer({
				...info,
				birth: `${info.year}-${info.month}-${info.day}`,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
			});
			if (res.isSuccess) {
				setInfo(initialInfo);
				setSection(0);
			}
		}
	};

	return (
		<Container>
			<BreadCrumb
				depths={['HOME', '참여 마당', '자원봉사 신청 조회/수정']}
			/>
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
						<SelectTable {...secondProps} />
					</S.TableWrapper>
					<S.CardContentWrapper>
						<CardContent {...secondProps.cardContent} />
					</S.CardContentWrapper>
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

export default UpdateVolunteer;
