import styled from 'styled-components';
import {colorPalette} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleWrapper = styled.div`
	text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
	border: ${(props) => props.border && props.border};
	min-width: ${(props) => props.border && '6.7rem'};
	padding: ${(props) => props.border && '0.25rem 1.5rem'};
	border-radius: ${(props) => props.border && '1.5rem'};
	width: fit-content;
	display: flex;
	justify-content: center;
	flex-direction: column;
	> span {
		margin: 1rem 0;
	}
`;

export const Border = styled.div`
	width: 50px;
	height: ${(props) => (props.height ? props.height : '3px')};
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : colorPalette.primary};
	margin-bottom: 1rem;

	display: ${(props) => props.border && 'none'};
`;
