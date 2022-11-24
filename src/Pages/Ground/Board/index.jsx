import React, {useState, useEffect} from 'react';
import {firstProps, initialState} from './data';
import {Board as BoardTemplate} from '../../../Components/Organism';
import {useLocation, useLoaderData} from 'react-router-dom';
import {getBoard} from '../../../api/board';
import {generateComments} from '../../../util';
import {Container} from '../../../Components/Atom';
import {BreadCrumb} from '../../../Components/Template';

const categoryMap = {
	자유: '자유게시판',
	홍보: '홍보게시판',
	환불: '환불게시판',
	공지: '공지게시판',
	사진: '사진게시판',
};

const Board = ({category = '자유'}) => {
	const [state, setState] = useState(initialState);
	const params = useLoaderData();
	const location = useLocation();

	useEffect(() => {
		(async () => {
			let res = await getBoard({id: params.id, category});
			setState(res.data);
		})();
	}, []);

	firstProps.title.children = state.title;
	firstProps.date.children = state.created;
	firstProps.content.children = state.content;
	firstProps.comments = generateComments(state.comments);
	firstProps.author.children = state.author;

	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여마당', categoryMap[category]]} />
			<BoardTemplate {...firstProps} />
		</Container>
	);
};

export default Board;
