import React from 'react';
import {imageProps, imageDescription} from './data';
import {Container, Image, Ul} from '../../../Components/Atom';
import * as S from './style';

const Gift = () => {
	return (
		<Container>
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
