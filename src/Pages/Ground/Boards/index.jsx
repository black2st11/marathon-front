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
import {checkPassword, getListBoard} from '../../../api/board';

const Boards = ({category}) => {
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(0);
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		(async () => {
			let res = await getListBoard({category, page});
			setBoards(res.data.results);
			setCount(res.data.count);
		})();
	}, [page]);

	normalBoardsProps.contents = boards;
	const goBoard = async ({id, isPassword = false}) => {
		if (isPassword) {
			let password = prompt();
			if (password === null) {
				return;
			}
			let res = await checkPassword({password, id});
			if (!res.isSuccess) {
				return alert('비밀번호가 일치하지 않습니다.');
			}
		}
		window.location.href = window.location.href + `/${id}`;
	};
	return (
		<S.Container>
			<S.BoardsWrapper>
				{category === '환불' ? (
					<BoardsTemplate
						{...refundBoardsProps}
						count={count}
						page={page}
						onClick={goBoard}
					/>
				) : (
					<BoardsTemplate
						{...normalBoardsProps}
						count={count}
						page={page}
						onClick={goBoard}
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
