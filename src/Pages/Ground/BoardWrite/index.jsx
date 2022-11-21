import React, {useState} from 'react';
import {BoardForm} from '../../../Components/Template';
import {firstProps, initialState} from './data';
import {setForm} from '../../../util';
import {postBoard} from '../../../api/board';
import {Container} from '../../../Components/Atom';

const BoardWrite = ({category = '자유'}) => {
	const [state, setState] = useState(initialState);
	firstProps.inputs.forEach((input) => {
		setForm(input, state, setState);
	});
	firstProps.writeBtn.onClick = async () => {
		await postBoard({...state, category});
	};
	return (
		<Container>
			<BoardForm {...firstProps} />
		</Container>
	);
};

export default BoardWrite;
