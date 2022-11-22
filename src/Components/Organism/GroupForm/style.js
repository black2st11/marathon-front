import styled from 'styled-components';
import {colorPalette} from '../../../config';

export const Container = styled.div`
	${(props) => props.maxWidth && `max-width : ${props.maxWidth};`}
	${(props) => props.maxWidth && `overflow : scroll;`}
    width : 100%;
	overflow: scroll;
`;

export const HandleWrapper = styled.div`
	display: flex;
	margin-bottom: 1rem;
	width: 100%;
`;

export const CheckButtonWrapper = styled.div`
	margin: auto auto auto 0;
`;

export const AddButtonWrapper = styled.div`
	margin: auto 1rem auto auto;
`;

export const CheckDeleteButtonWrapper = styled.div`
	margin: auto 0 auto 1rem;
`;

export const CurrentLength = styled.div`
	margin: auto;
`;

export const Table = styled.table`
	border-spacing: 0;
	border-collapse: separate;
	width: 100%;
	min-width: 944px;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
	background-color: ${colorPalette.thead};
	padding: 1rem 0;
	text-align: center;
	min-width: 100px;
	&:first-child {
		border-radius: 34px 0 0 0;
	}

	&:last-child {
		border-radius: 0 34px 0 0;
	}
`;

export const Td = styled.td`
	text-align: center;
	padding: 0.6rem 0.3rem;
	box-sizing: border-box;
	border-bottom: 1px solid ${colorPalette.gray};
`;

export const MultiWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const MultiItem = styled.div`
	width: 30%;
`;

export const CheckBoxWrapper = styled.div`
	width: 1.25rem;
	height: 1.25rem;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ButtonWrapper = styled.div`
	width: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
`;
