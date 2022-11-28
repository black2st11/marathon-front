import React, {useState} from 'react';
import {CardContent, SelectTable} from '../../../Components/Organism';
import {BreadCrumb, PersonForm} from '../../../Components/Template';
import {setForm, setWarnText} from '../../../util';
import {isValidate} from '../../../util/validator';
import {firstProps, initialInfo, invalidProps, secondProps} from './data';
import {Container} from '../../../Components/Atom';
import {getRecordList} from '../../../api';

const Check = () => {
	const [info, setInfo] = useState(initialInfo);
	const [invalid, setInvalid] = useState(invalidProps);
	const [section, setSection] = useState(0);

	const firstInfo = {
		name: info.name,
		bib: info.bib,
		gender: info.gender,
		course: info.course,
	};

	firstProps.inputs.map((input) => {
		setForm(input, info, setInfo);
		setWarnText(input, invalid);
	});

	firstProps.button.onClick = async () => {
		if (isValidate(firstInfo, invalidProps, setInvalid)) {
			let res = await getRecordList({...info});
			console.log(res);
			if (res.data.count === 1 && res.isSuccess) {
				secondProps.info[0][0].content.children =
					res.data.results[0].participation.name;
				secondProps.info[0][1].content.children =
					res.data.results[0].participation.bib;
				secondProps.info[1][0].content.children =
					res.data.results[0].record;
				secondProps.info[1][1].content.children =
					res.data.results[0].return_record;
				setSection(1);
			}
		}
	};

	return (
		<Container height={'80vh'}>
			<BreadCrumb depths={['HOME', '대회기록', '기록조회']} />
			{section === 0 && <PersonForm {...firstProps} />}
			{section === 1 && (
				<React.Fragment>
					<SelectTable items={secondProps.info} />
					<div style={{margin: '1rem 0'}}></div>
					<CardContent {...secondProps.cardContent} />
				</React.Fragment>
			)}
		</Container>
	);
};

export default Check;
