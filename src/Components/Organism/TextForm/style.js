import styled from 'styled-components';
import {viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	width: 100%;
	@media only screen and (max-width: ${viewSize.tablet}) {
		width: 100%;
		margin-bottom: 1.25rem;
	} ;
`;

export const LongContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;

	> div {
		width: 100%;
	}

	@media only screen and (max-width: ${viewSize.tablet}) {
		width: 100%;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1.25rem;

		> div {
			width: fit-content;
		}
	}

	@media only screen and (max-width: ${viewSize.mobile}) {
		width: 100%;
		align-items: start;
		margin-bottom: 1.25rem;
		flex-direction: column;

		> div {
			width: fit-content;
		}
	} ;
`;

export const NameWrapper = styled.div`
	width: 40%;
	text-align: left;
	@media only screen and (max-width: ${viewSize.tablet}) {
		margin-right: 1rem;
		width: fit-content;
	} ;
`;

export const EnglishNameWrapper = styled.div`
	width: 60%;
	text-align: left;
	@media only screen and (max-width: ${viewSize.tablet}) {
		width: auto;
		margin-left: 0px;
	} ;
`;
