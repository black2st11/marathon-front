import React from 'react';
import {imageProps, limitTime} from './data';
import * as S from './style';
import {CardSection} from '../../../Components/Template';
import {Container, Image} from '../../../Components/Atom';

const Course = () => {
	return (
		<Container>
			<S.Container>
				<S.ImgWrapper>
					<Image {...imageProps} />
				</S.ImgWrapper>
				<S.CardWrapper>
					<CardSection {...limitTime} />
				</S.CardWrapper>
			</S.Container>
		</Container>
	);
};

export default Course;
