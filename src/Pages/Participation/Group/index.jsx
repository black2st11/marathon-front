import React, {useState} from 'react';
import {postGroupParticipation} from '../../../api';
import {PersonForm} from '../../../Components/Template';
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
import {firstProps, groupProps, secondProps, invalidProps} from './data';

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
			setSection(1);
		}
	};

	secondProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await postGroupParticipation({
				...info,
				birth: `${info.year}-${info.month}-${info.day}`,
				phone: `${info.phone1}${info.phone2}${info.phone3}`,
				participation: generateGroupParticipation(group),
			});

			if (!res.isSuccess) {
				alert('Exception Error raised');
			}
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
	return (
		<React.Fragment>
			{section === 0 && <PersonForm {...firstProps} />}
			{section === 1 && <PersonForm {...secondProps} />}
		</React.Fragment>
	);
};

export default Group;
