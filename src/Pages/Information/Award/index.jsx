import React from 'react';
import {CardSection} from '../../../Components/Template';
import {prizeInfo, coursePrize} from './data';
import {Container} from '../../../Components/Atom';

const Award = () => {
	return (
		<Container>
			<CardSection {...coursePrize} />
			<CardSection {...prizeInfo} />
		</Container>
	);
};

export default Award;
