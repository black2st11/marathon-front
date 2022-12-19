import styled, {css} from 'styled-components';
import {fontSize, fontWeight, viewSize, colorPalette} from '../../../config';

const baseText = css`
	white-space: pre-line;
	font-size: ${(props) =>
		props.fontSize ? props.fontSize.desktop : fontSize.base};
	font-weight: ${(props) =>
		props.fontWeight ? props.fontWeight : fontWeight.base};
	color: ${(props) => (props.color ? props.color : colorPalette.black)};
	${(props) => props.opacity && `opacity : ${props.opacity};`}
	${(props) => props.shadow && `text-shadow : ${props.shadow};`}
    margin : 0.25rem 0;
	${(props) => props.fontFamily && `font-family : ${props.fontFamily};`}
	${(props) => props.lineHeight && `line-height : ${props.lineHeight};`}

	@media only screen and (min-width: ${viewSize.mobile} and max-width: ${viewSize.tablet}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.tablet : fontSize.base};
	}

	@media only screen and (max-width: ${viewSize.mobile}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.mobile : fontSize.base};
	} ;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Span = styled.span`
	${baseText}
`;

export const P = styled.p`
	${baseText}
`;

export const H1 = styled.h1`
	${baseText}
`;

export const H2 = styled.h2`
	${baseText}
`;

export const H3 = styled.h3`
	${baseText}
`;
