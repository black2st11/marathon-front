import React, {useState} from 'react';
import {firstProps, initialInfo, invalidProps} from './data';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {postVolunteer} from '../../../api';
import {Container} from '../../../Components/Atom';
import {TopWRapper} from '../Person';

const Volunteer = () => {
	const [info, setInfo] = useState(initialInfo);

	const [invalid, setInvalid] = useState(invalidProps);
	firstProps.inputs.forEach((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});
	console.log(info.participated);
	firstProps.button.onClick = async () => {
		if (isValidate(info, invalidProps, setInvalid)) {
			let res = await postVolunteer({
				...info,
				participated: info.participated.join(','),
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				birth: `${info.year}-${info.month}-${info.day}`,
				class_name: info.class,
			});

			if (!res.isSuccess) {
				return;
			}

			sessionStorage.setItem('name', info.name);
			sessionStorage.setItem(
				'phone',
				`${info.phone1}-${info.phone2}-${info.phone3}`,
			);

			window.location.href = `${window.location.href}-update`;
		}
	};

	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여 마당', '자원봉사 신청']} />
			<PersonForm {...firstProps} />
		</Container>
	);
};

export default Volunteer;
