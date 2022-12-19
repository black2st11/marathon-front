import styled from 'styled-components';
import {colorPalette} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const TermsWrapper = styled.div`
	margin-bottom: 3.75rem;
	width: 100%;
`;

export const CheckBoxWrapper = styled.div`
	width: 100%;
	margin-bottom: 1.675rem;
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const UlWrapper = styled.div`
	margin-bottom: 3.75rem;
	width: 100%;
	background-color: ${colorPalette.card};
	border-radius: 1rem;
	padding: 0 1rem;
	box-sizing: border-box;
`;

export const InputWrapper = styled.div`
	margin: 0.675rem auto;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin: 3.5rem auto;
	width: 100%;
	display: flex;
	justify-content: end;
	> button {
		width: 276px;
		height: 60px;
	}
`;

export const GroupFormWrapper = styled.div`
	margin: 3rem 0;
`;
