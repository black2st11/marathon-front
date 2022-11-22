import React from 'react';
import {BreadCrumb, CardSection} from '../../../Components/Template';
import {prizeInfo, coursePrize} from './data';
import {Container} from '../../../Components/Atom';

const Award = () => {
	return (
		<Container>
			<BreadCrumb depths={['HOME', '대회 안내', '시상 안내']} />
			<CardSection {...coursePrize} />
			<CardSection {...prizeInfo} />
		</Container>
	);
};

export default Award;
