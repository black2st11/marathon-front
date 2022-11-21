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
import {CardSection} from '../../../Components/Template';
import {Container} from '../../../Components/Atom';

const Note = () => {
	return (
		<Container>
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
