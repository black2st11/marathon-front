import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputFormWrapper = styled.div`
	margin-bottom: 1rem;
`;

export const DescriptionWrapper = styled.div`
	margin-bottom: 2.75rem;
`;

export const FileWrapper = styled.div`
	margin-bottom: 1.375rem;
	display: flex;

	> div {
		margin-left: 1rem;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: end;
	margin: 1rem 0;

	> button {
		width: 7rem;
		margin-left: 1rem;
	}
`;
