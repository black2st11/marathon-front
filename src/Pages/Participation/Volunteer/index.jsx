import React, {useState} from 'react';
import {firstProps, initialInfo, invalidProps} from './data';
import {PersonForm} from '../../../Components/Template';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {postVolunteer} from '../../../api';

const Volunteer = () => {
	const [info, setInfo] = useState(initialInfo);

	const [invalid, setInvalid] = useState(invalidProps);

	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await postVolunteer({
				...info,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				birth: `${info.year}-${info.month}-${info.day}`,
				class_name: info.class,
			});

			if (!res.isSuccess) {
				return alert('error occurred');
			}
		}
	};

	return <PersonForm {...firstProps} />;
};

export default Volunteer;
