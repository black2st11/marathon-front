import React, {useState} from 'react';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {firstProps, secondProps, invalidProps, textareaProps} from './data';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {isExist, postPersonParticipation} from '../../../api';
import {CheckBox, Container, Text, TextArea} from '../../../Components/Atom';
import styled from 'styled-components';
import {viewSize} from '../../../config';
import {firstProgress, secondProgress} from '../../../config/images';
import {useDaumPostcodePopup} from 'react-daum-postcode';

export const TopWRapper = styled.div`
	width: 100%;
	display: flex;
	margin-top: 1rem;
	> img {
		margin: auto 0 auto auto;
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		flex-direction: column-reverse;

		> img {
			margin: auto auto auto 0;
		}
	}
`;

export const CheckBoxWrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: baseline;
	> div {
		margin-right: 1rem;
	}
`;

const Person = () => {
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

	const [check, setCheck] = useState(false);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);
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
	const firstInfo = {
		name: info.name,
		phone1: info.phone1,
		phone2: info.phone2,
		phone3: info.phone3,
		year: info.year,
		month: info.month,
		day: info.day,
		gender: info.gender,
	};

	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = async () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			if (!check) {
				return alert('약관에 동의하셔야 진행이 가능합니다.');
			}

			let res = await isExist({
				name: info.name,
				birth: `${info.year}-${info.month}-${info.day}`,
			});
			if (res.data.is_exist) {
				return alert(
					'해당 이름과 생년월일로 등록된 사람이 있습니다. 주최측에 문의해 주세요.',
				);
			}
			setSection(1);
		}
	};

	secondProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	secondProps.inputs[0].button.onClick = () => handleClick();

	secondProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await postPersonParticipation({
				name: info.name,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				birth: `${info.year}-${info.month}-${info.day}`,
				gender: info.gender,
				post_number: info.post_number,
				address: info.address,
				detail_address: info.detail_address,
				email: info.email,
				depositor: info.depositor,
				course: info.course,
				gift: info.gift,
			});

			if (!res.isSuccess) {
				alert('error occurred');
			}

			sessionStorage.setItem('name', info.name);
			sessionStorage.setItem(
				'birth',
				`${info.year}-${info.month}-${info.day}`,
			);

			window.location.href =
				window.location.origin + '/participation/person-update';
		}
	};
	return (
		<Container>
			<TopWRapper>
				<BreadCrumb
					depths={['HOME', '참가신청 하기', '개인 참가신청']}
				/>
				<img src={section === 0 ? firstProgress : secondProgress} />
			</TopWRapper>

			{section === 0 && (
				<>
					<TextArea
						borderRadius={'1rem'}
						height={'228px'}
						disabled={true}
						value={textareaProps}
					/>
					<CheckBoxWrapper>
						<CheckBox
							value={check}
							onChange={(e) => {
								setCheck(e.target.value);
							}}
						></CheckBox>
						<Text>위의 사항에 대하여 모두 동의합니다.</Text>
					</CheckBoxWrapper>
				</>
			)}

			{section === 0 && <PersonForm {...firstProps} />}
			{section === 1 && <PersonForm {...secondProps} />}
		</Container>
	);
};

export default Person;
