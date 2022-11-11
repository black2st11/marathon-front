import React, {useState} from 'react';
import * as S from './style';
import {
	firstProps,
	initialInfo,
	invalidProps,
	secondProps,
	thirdProps,
} from './data';
import {PersonForm} from '../../../Components/Template';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {Button} from '../../../Components/Atom';
import {getListVolunteer, updateVolunteer} from '../../../api';

const UpdateVolunteer = () => {
	const [info, setInfo] = useState(initialInfo);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);

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
				phone: `${info.phone1}${info.phone2}${info.phone3}`,
			});
			if (res.data.length === 0) {
				alert('일치하는 신청서가 없습니다.');
			}
			secondProps.items.map((items) => {
				items.forEach((item) => {
					if (item.key === 'class_name') {
						item.content.children = `${res.data[0]['grade']}학년${
							res.data[0][item.key]
						}반`;
					} else {
						item.content.children = res.data[0][item.key];
					}
				});
			});
			let splitted_birth = res.data[0].birth.split('-');
			setInfo({
				...info,
				...res.data[0],
				year: splitted_birth[0],
				month: splitted_birth[1],
				day: splitted_birth[2],
			});
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
				phone: `${info.phone1}${info.phone2}${info.phone3}`,
			});
			if (res.isSuccess) {
				setInfo(initialInfo);
				setSection(0);
			}
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
		</React.Fragment>
	);
};

export default UpdateVolunteer;
