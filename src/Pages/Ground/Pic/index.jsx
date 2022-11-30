import React, {useEffect, useState} from 'react';
import {BreadCrumb} from '../../../Components/Template';
import {Container} from '../../../Components/Atom';
import {Pic as PicTemplate} from '../../../Components/Template';
import {getListBoard} from '../../../api/board';

const Pic = () => {
	const [page, setPage] = useState(1);
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		(async () => {
			let res = await getListBoard({category: '사진', page});
			setBoards(res.data.results);
		})();
	}, []);

	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여마당', '사진게시판']} />
			<PicTemplate images={boards} />
		</Container>
	);
};

export default Pic;
