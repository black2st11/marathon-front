import React, {useEffect, useState} from 'react';
import {
	normalBoardsProps,
	refundBoardsProps,
	buttonProps,
	paginationProps,
} from './data';
import {Boards as BoardsTemplate} from '../../../Components/Template';
import {Pagination} from '../../../Components/Organism';
import * as S from './style';
import {Button} from '../../../Components/Atom';
import {getListBoard} from '../../../api/board';

const Boards = ({category}) => {
	const [page, setPage] = useState(2);
	const [count, setCount] = useState(0);
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		(async () => {
			let res = await getListBoard({category, page});
			setBoards(res.data.results);
			setCount(res.data.count);
			console.log(res);
		})();
	}, [page]);

	normalBoardsProps.contents = boards;

	return (
		<S.Container>
			<S.BoardsWrapper>
				{category === '환불' ? (
					<BoardsTemplate
						{...refundBoardsProps}
						count={count}
						page={page}
					/>
				) : (
					<BoardsTemplate
						{...normalBoardsProps}
						count={count}
						page={page}
					/>
				)}
			</S.BoardsWrapper>
			<S.ButtonnWrapper>
				<Button {...buttonProps} />
			</S.ButtonnWrapper>
			<S.PagintaionWrapper>
				<Pagination
					{...paginationProps}
					current={page}
					total={Math.floor(count / 10) + 1}
					onNext={() => setPage(page + 1)}
					onPrev={() => setPage(page - 1)}
				/>
			</S.PagintaionWrapper>
		</S.Container>
	);
};

export default Boards;
