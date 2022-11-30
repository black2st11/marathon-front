import React from 'react';
import * as S from './style';
import {Text} from '../../Atom';

const Comment = ({author, content}) => {
	return (
		<S.Container>
			<S.TitleWrapper>
				<Text {...author} />
			</S.TitleWrapper>
			<S.ContentWrapper>
				<Text {...content} />
			</S.ContentWrapper>
		</S.Container>
	);
};

export default Comment;
