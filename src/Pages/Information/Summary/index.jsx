import React from 'react';
import {summary, way, fee, refundPolicy, schedule} from './data';
import {CardSection} from '../../../Components/Template';
import {Container} from '../../../Components/Atom';

const Summary = () => {
	return (
		<Container>
			<CardSection {...summary} />
			<CardSection {...way} />
			<CardSection {...fee} />
			<CardSection {...refundPolicy} />
			<CardSection {...schedule} />
		</Container>
	);
};

export default Summary;
