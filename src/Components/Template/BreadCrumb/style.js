import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DepthWrapper = styled.div`
	display: flex;
	margin: 1rem 0;
	align-items: baseline;
`;

export const Depth = styled.div`
	margin: 0 0.5rem;
	&:first-child {
		margin: 0 0.5rem 0 0;
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 3rem;
`;
