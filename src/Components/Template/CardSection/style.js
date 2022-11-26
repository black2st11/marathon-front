import styled from 'styled-components';
import {viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3.75rem;

	${(props) =>
		props.display?.desktop && `display : ${props.display.desktop};`}

	@media screen and (max-width : ${viewSize.tablet}) {
		${(props) =>
			props.display?.tablet && `display : ${props.display.tablet};`}
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		${(props) =>
			props.display?.mobile && `display : ${props.display.mobile};`}
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 1.5rem;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin-bottom: 1.25rem;
	}
`;

export const SubTitleWrapper = styled.div`
	margin-bottom: 1.25rem;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin-bottom: 1rem;
	}
`;

export const CardWrapper = styled.div``;

export const TableWrapper = styled.div`
	overflow-x: scroll;

	@media screen and (min-width: 1000px) {
		::-webkit-scrollbar {
			display: none;
		}

		-ms-overflow-style: none;
	}
`;
