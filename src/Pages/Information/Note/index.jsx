import React from 'react';
import {
	qualification,
	reception,
	health,
	fail,
	provide,
	onGoing,
	after,
	control,
	emergency,
	privacy,
} from './data';
import {BreadCrumb, CardSection} from '../../../Components/Template';
import {Container} from '../../../Components/Atom';

const Note = () => {
	return (
		<Container>
			<BreadCrumb depths={['HOME', '대회 안내', '유의 사항']} />
			<CardSection {...qualification} />
			<CardSection {...reception} />
			<CardSection {...health} />
			<CardSection {...fail} />
			<CardSection {...provide} />
			<CardSection {...onGoing} />
			<CardSection {...after} />
			<CardSection {...control} />
			<CardSection {...emergency} />
			<CardSection {...privacy} />
		</Container>
	);
};

export default Note;
