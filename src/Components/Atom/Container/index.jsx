import styled from 'styled-components';
import {viewSize, defaultSize} from '../../../config';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 98%;
	max-width: ${defaultSize.desktopContainer};
	margin: 1rem auto 15rem auto;
	@media screen and (max-width: ${viewSize.tablet}) {
		max-width: ${defaultSize.tabletContainer};
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		max-width: ${defaultSize.mobileContainer};
	}
`;

export default Container;
