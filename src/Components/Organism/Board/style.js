import styled from 'styled-components';
import {colorPalette} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleWrapepr = styled.div`
	margin-bottom: 1rem;
`;

export const DateWrapper = styled.div`
	margin-bottom: 2.5rem;
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colorPalette.divider};
	margin-bottom: 3.5rem;
`;

export const ContentWrapper = styled.div`
	border: 1px solid ${colorPalette.border};
	width: 100%;
	min-height: 40rem;
	margin-bottom: 3.5rem;
	padding: 1rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	> span {
		white-space: pre-line;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	margin: 1rem 0;

	> button {
		width: 7rem;
	}
`;
