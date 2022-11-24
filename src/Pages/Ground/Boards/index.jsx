import React, {useEffect, useState} from 'react';
import {
	normalBoardsProps,
	refundBoardsProps,
	buttonProps,
	paginationProps,
} from './data';
import {
	Boards as BoardsTemplate,
	BreadCrumb,
} from '../../../Components/Template';
import {Pagination} from '../../../Components/Organism';
import * as S from './style';
import {Button, Container} from '../../../Components/Atom';
import {checkPassword, getListBoard} from '../../../api/board';

const categoryMap = {
	자유: '자유게시판',
	홍보: '홍보게시판',
	환불: '환불게시판',
	공지: '공지게시판',
	사진: '사진게시판',
};

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
	const goCreate = () => {
		window.location.href = window.location.href + `-create`;
	};
	buttonProps.onClick = () => goCreate();

	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여마당', categoryMap[category]]} />
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
					<Pagination
						{...paginationProps}
						current={page}
						total={Math.floor(count / 10) + 1}
						onNext={() => setPage(page + 1)}
						onPrev={() => setPage(page - 1)}
					/>
					<Button {...buttonProps} />
				</S.ButtonnWrapper>
			</S.Container>
		</Container>
	);
};

export default Boards;
