import React from 'react';
import * as S from './style';
import {Text} from '../../Atom';

const ContentTitle = ({
	text,
	border,
	description,
	bgColor,
	height,
	textAlign,
}) => {
	return (
		<S.Container>
			<S.Border
				border={border ? true : false}
				bgColor={bgColor}
				height={height}
			/>
			<S.TitleWrapper border={border} textAlign={textAlign}>
				<Text {...text} />
				{description && <Text {...description} />}
			</S.TitleWrapper>
		</S.Container>
	);
};

export default ContentTitle;
