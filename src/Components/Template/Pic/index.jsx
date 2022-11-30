import React from 'react';
import * as S from './style';

const Pic = ({images = []}) => {
	console.log(images);
	return (
		<S.Container>
			{images.map((image) => {
				return (
					<S.Link href={image.link}>
						<S.ImgWrapper>
							<S.Img
								src={'http://localhost:8000' + image.image}
							/>
							<S.ImgTitle>{image.title}</S.ImgTitle>
							<S.ImgCreated>{image.created}</S.ImgCreated>
						</S.ImgWrapper>
					</S.Link>
				);
			})}
			{images.map((image) => {
				return (
					<S.Link href={image.link}>
						<S.ImgWrapper>
							<S.Img
								src={'http://localhost:8000' + image.image}
							/>
							<S.ImgTitle>{image.title}</S.ImgTitle>
							<S.ImgCreated>{image.created}</S.ImgCreated>
						</S.ImgWrapper>
					</S.Link>
				);
			})}
			{images.map((image) => {
				return (
					<S.Link href={image.link}>
						<S.ImgWrapper>
							<S.Img
								src={'http://localhost:8000' + image.image}
							/>
							<S.ImgTitle>{image.title}</S.ImgTitle>
							<S.ImgCreated>{image.created}</S.ImgCreated>
						</S.ImgWrapper>
					</S.Link>
				);
			})}
			{images.map((image) => {
				return (
					<S.Link href={image.link}>
						<S.ImgWrapper>
							<S.Img
								src={'http://localhost:8000' + image.image}
							/>
							<S.ImgTitle>{image.title}</S.ImgTitle>
							<S.ImgCreated>{image.created}</S.ImgCreated>
						</S.ImgWrapper>
					</S.Link>
				);
			})}
		</S.Container>
	);
};

export default Pic;
