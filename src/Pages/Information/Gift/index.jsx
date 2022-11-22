import React from 'react';
import {imageProps, imageDescription} from './data';
import {Container, Image, Ul} from '../../../Components/Atom';
import * as S from './style';
import {BreadCrumb} from '../../../Components/Template';

const Gift = () => {
	return (
		<Container>
			<BreadCrumb depths={['HOME', '대회 안내', '기념품']} />
			<S.Container>
				<S.ImageWrapper>
					<Image {...imageProps} />
				</S.ImageWrapper>
				<S.UlWrapper>
					<Ul {...imageDescription} />
				</S.UlWrapper>
			</S.Container>
		</Container>
	);
};

export default Gift;
