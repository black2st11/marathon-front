import React, {useState} from 'react';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {firstProps, secondProps, invalidProps, textareaProps} from './data';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {postPersonParticipation} from '../../../api';
import {CheckBox, Container, Text, TextArea} from '../../../Components/Atom';
import styled from 'styled-components';
import {viewSize} from '../../../config';
import {firstProgress, secondProgress} from '../../../config/images';

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

	firstProps.button.onClick = () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			if (!check) {
				return alert('약관에 동의하셔야 진행이 가능합니다.');
			}
			setSection(1);
		}
	};

	secondProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

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
