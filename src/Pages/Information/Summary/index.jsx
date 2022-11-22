import React from 'react';
import {
	summary,
	way,
	fee,
	refundPolicy,
	schedule,
	mobileFee,
	mobileDeposit,
} from './data';
import {BreadCrumb, CardSection} from '../../../Components/Template';
import {Container} from '../../../Components/Atom';

const Summary = () => {
	return (
		<Container>
			<BreadCrumb depths={['HOME', '대회 안내', '대회 요강']} />
			<CardSection {...summary} />
			<CardSection {...way} />
			<CardSection {...fee} />
			<CardSection {...mobileFee} />
			<CardSection {...mobileDeposit} />
			<CardSection {...refundPolicy} />
			<CardSection {...schedule} />
		</Container>
	);
};

export default Summary;
