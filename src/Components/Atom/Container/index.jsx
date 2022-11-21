import styled from 'styled-components';
import {viewSize, defaultSize} from '../../../config';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 98%;
	margin: auto;
	max-width: ${defaultSize.desktopContainer};

	@media screen and (max-width: ${viewSize.tablet}) {
		max-width: ${defaultSize.tabletContainer};
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		max-width: ${defaultSize.mobileContainer};
	}
`;

export default Container;
