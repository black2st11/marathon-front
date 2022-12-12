import React, {useState} from 'react';
import {postGroupParticipation} from '../../../api';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {
	setGroupForm,
	setAddGroup,
	setGroupDelete,
	setAllCheck,
	setToggleCheck,
	setForm,
	setWarnText,
	generateGroupParticipation,
} from '../../../util';
import {isValidate} from '../../../util/validator';
import {
	firstProps,
	groupProps,
	secondProps,
	invalidProps,
	textareaProps,
} from './data';
import {CheckBox, Container, Text, TextArea} from '../../../Components/Atom';
import {CheckBoxWrapper, TopWRapper} from '../Person';
import {firstProgress, secondProgress} from '../../../config/images';
import {useDaumPostcodePopup} from 'react-daum-postcode';

const Group = () => {
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
	const [isAllCheck, setIsAllCheck] = useState(false);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);
	const [check, setCheck] = useState(false);
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

	let firstInfo = {
		name: info.name,
		representative: info.representative,
		year: info.year,
		month: info.month,
		day: info.day,
	};

	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	secondProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			if (!check) {
				return alert('약관에 동의하여주시기 바랍니다.');
			}
			setSection(1);
		}
	};

	secondProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await postGroupParticipation({
				...info,
				birth: `${info.year}-${info.month}-${info.day}`,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				participation: generateGroupParticipation(group),
			});

			if (!res.isSuccess) {
				alert('Exception Error raised');
			}

			sessionStorage.setItem('name', info.name);
			sessionStorage.setItem('representative', info.representative);
			sessionStorage.setItem(
				'phone',
				`${info.phone1}-${info.phone2}-${info.phone3}`,
			);

			window.location.href = `${window.location.href}-update`;
		}
	};

	groupProps.trs = setGroupForm(group, setGroup);
	groupProps.addBtn.onClick = () => setAddGroup(group, setGroup);
	groupProps.deleteBtn.onClick = () => setGroupDelete(group, setGroup);
	groupProps.checkBtn.onClick = () => setAllCheck(group, setGroup);
	groupProps.ths[0].onChange = () =>
		setToggleCheck(group, setGroup, setIsAllCheck);
	groupProps.ths[0].value = isAllCheck;
	secondProps.group = groupProps;
	secondProps.inputs[0].button.onClick = () => handleClick();
	return (
		<Container>
			<TopWRapper>
				<BreadCrumb
					depths={['HOME', '참가신청 하기', '단체 참가신청']}
				/>
				<img src={section === 0 ? firstProgress : secondProgress} />
			</TopWRapper>
			{section === 0 && (
				<React.Fragment>
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
				</React.Fragment>
			)}
			{section === 0 && <PersonForm {...firstProps} />}
			{section === 1 && <PersonForm {...secondProps} />}
		</Container>
	);
};

export default Group;
