import styled from 'styled-components';
import {colorPalette, fontSize, viewSize} from '../../../config';

export const TextArea = styled.textarea`
	width: 100%;
	border: ${(props) =>
		props.border ? props.border : `1px solid ${colorPalette.border}`};
	font-size: ${(props) =>
		props.fontSize ? props.fontSize.desktop : fontSize.base};
	padding: 1rem;
	box-sizing: border-box;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : '0'};
	resize: none;
	${(props) => props.height && `height : ${props.height};`}
	@media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.tablet : fontSize.base};
	}

	@media only screen and (max-width: ${viewSize.mobile}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.mobile : fontSize.base};
	} ;
`;
