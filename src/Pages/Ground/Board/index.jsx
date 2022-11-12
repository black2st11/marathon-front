import React, {useState, useEffect} from 'react';
import {firstProps, initialState} from './data';
import {Board as BoardTemplate} from '../../../Components/Organism';
import {useLocation, useLoaderData} from 'react-router-dom';
import {getBoard} from '../../../api/board';
import {generateComments} from '../../../util';

const Board = ({category = '자유'}) => {
	const [state, setState] = useState(initialState);
	const params = useLoaderData();
	const location = useLocation();

	console.log(location);
	useEffect(() => {
		(async () => {
			let res = await getBoard({id: params.id, category});
			console.log(res);
			setState(res.data);
		})();
	}, []);

	firstProps.title.children = state.title;
	firstProps.date.children = state.created;
	firstProps.content.children = state.content;
	firstProps.comments = generateComments(state.comments);
	firstProps.author.children = state.author;

	return <BoardTemplate {...firstProps} />;
};

export default Board;
