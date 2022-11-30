import styled from 'styled-components';
import {colorPalette, viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Link = styled.a`
	width: 30%;
	margin: 3rem 1rem;
	text-decoration: none;
	color: ${colorPalette.navColor};
	@media screen and (max-width: ${viewSize.mobile}) {
		width: 90%;
		margin: 1rem auto;
	}
`;
export const ImgWrapper = styled.div``;

export const ImgTitle = styled.div`
	margin-bottom: 0.5rem;
`;

export const ImgCreated = styled.div``;

export const Img = styled.img`
	width: 100%;
`;
