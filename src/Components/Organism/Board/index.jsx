import React from 'react';
import * as S from './style';
import {Text, Button} from '../../Atom';
import {Comment} from '../../Organism';
import {Image} from 'antd';
const Board = ({title, date, content, listBtn, file, comments = []}) => {
	let fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;
	return (
		<S.Container>
			<S.TitleWrapepr>
				<Text {...title} />
			</S.TitleWrapepr>
			<S.DateWrapper>
				<Text {...date} />
			</S.DateWrapper>
			<S.Divider />
			<S.ContentWrapper>
				<Text {...content} />
				{file?.url?.match(fileForm) && (
					<Image src={file.url.match(fileForm) && file.url} />
				)}
			</S.ContentWrapper>
			{comments.map((comment) => (
				<Comment {...comment} />
			))}
			<S.ButtonWrapper>
				<Button {...listBtn} />
			</S.ButtonWrapper>
		</S.Container>
	);
};

export default Board;
