import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CheckBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;

export const RowWraper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin: 1rem 0;
`;

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;

	> * {
		margin: auto 1rem auto 0;
	}

	> button {
		width: 160px;
	}

	> div {
		width: 200px;
		height: 50px;
	}
`;

export const ActionWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;

	> * {
		margin: auto 1rem auto 0;
	}

	> button {
		width: 160px;
	}

	> select {
		width: 200px;
		height: 50px;
	}
`;

export const CheckTitle = styled.div``;

export const CheckBoxContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 1rem;

	> div {
		margin-right: 1rem;
	}
`;

export const TableWrapper = styled.div`
	max-width: 1160px;
	width: 100%;
`;

export const PaginationWrapper = styled.div`
	margin: 1rem 0;
`;

export const ButtonWrapper = styled.div`
	display: flex;

	> button {
		width: 160px;
	}
`;
