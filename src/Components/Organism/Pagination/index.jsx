import React from 'react';
import * as S from './style';
import {Link, Text} from '../../Atom';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Pagination = ({
	current = 1,
	total = 1,
	textProps,
	currentTextProps,
	pageSize = 5,
	onClick,
}) => {
	let pages = [];
	total = Math.ceil(total / pageSize);
	for (
		let page = Math.floor(current / pageSize) + 1;
		pages.length < 5 && page <= total;
		page++
	) {
		pages.push(page);
	}

	return (
		<S.Container>
			{current !== 1 && (
				<S.Page>
					<MdChevronLeft
						size='2rem'
						color='#9b9b9b'
						onClick={() => onClick(current - 1)}
					/>
				</S.Page>
			)}
			{pages.map((page) => (
				<S.Page>
					{current === page ? (
						<Link
							{...currentTextProps}
							children={page}
							onClick={() => onClick(page)}
						/>
					) : (
						<Link
							{...textProps}
							children={page}
							onClick={() => onClick(page)}
						/>
					)}
				</S.Page>
			))}
			{(current !== total || current < total) && (
				<S.Page>
					<MdChevronRight
						fontSize='2rem'
						color='#9b9b9b'
						onClick={() => onClick(current + 1)}
					/>
				</S.Page>
			)}
		</S.Container>
	);
};

export default Pagination;
