import styled from 'styled-components';
import {
	colorPalette,
	defaultSize,
	fontSize,
	fontWeight,
	viewSize,
} from '../../../config';

export const Container = styled.div`
	border: ${(props) =>
		props.checked
			? `1px solid ${colorPalette.primary}`
			: `1px solid ${colorPalette.gray}`};
	display: flex;
	align-items: center;
	width: 100%;
	height: ${(props) =>
		props.height ? props.height : defaultSize.inputHeight};
	box-sizing: border-box;
	background: ${(props) =>
		props.checked ? `${colorPalette.checkedRadio}` : `rgba(255,255,255)`};
`;

export const HiddenRadio = styled.input`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: 0;
	padding: 0;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const Label = styled.label`
	margin: auto auto auto 1rem;
	color: ${(props) => (props.color ? props.color : colorPalette.black)};
	font-size: ${(props) =>
		props.fontSize ? props.fontSize.desktop : fontSize.base};
	font-weight: ${(props) =>
		props.fontWeight ? props.fontWeight : fontWeight.base};

	@media only screen and (min-width: ${viewSize.mobile} and max-width: ${viewSize.tablet}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.tablet : fontSize.base};
	}

	@media only screen and (max-width: ${viewSize.mobile}) {
		font-size: ${(props) =>
			props.fontSize ? props.fontSize.mobile : fontSize.base};
	} ;
`;
