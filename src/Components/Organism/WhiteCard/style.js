import styled from 'styled-components';
import {colorPalette, defaultSize, viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colorPalette.white};
	width: 48%;
	padding: 4rem 2rem;
	box-sizing: border-box;

	@media screen and (max-width: 1100px) {
		width: 100%;
		padding: 2rem;
	}
`;

export const RowWrapper = styled.div`
	display: flex;
	@media screen and (max-width: ${viewSize.mobile}) {
		flex-direction: column;
	}
`;

export const Title = styled.div`
	border-right: 1px solid ${colorPalette.cardBorder};
	width: 20%;

	@media screen and (max-width: ${viewSize.mobile}) {
		border-right: none;
		width: 100%;
	}
`;

export const Contents = styled.div`
	width: 80%;
	margin-bottom: 2rem;
	padding-left: 2rem;

	@media screen and (max-width: ${viewSize.mobile}) {
		padding: 0;
		width: 100%;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
`;
