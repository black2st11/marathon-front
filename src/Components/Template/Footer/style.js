import styled from 'styled-components';

import {colorPalette, defaultSize, viewSize} from '../../../config';
export const Container = styled.div`
	width: 100%;
	background-color: ${colorPalette.primary};
`;

export const FooterWrapper = styled.div`
	margin: auto;
	max-width: ${defaultSize.desktopContainer};
	padding: 2.75rem 0;
	width: 98%;
`;

export const Section = styled.div`
	display: flex;
	margin-bottom: 1.25rem;

	@media screen and (max-width: ${viewSize.tablet}) {
		flex-direction: column;
		margin-bottom: 0;
	}
`;

export const TitleWrapper = styled.div`
	margin: auto 1rem auto auto;
	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 0 1rem auto;
	}
`;

export const ContactWrapper = styled.div`
	margin: auto 0 auto 1rem;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 0 0.5rem auto;
	}
`;

export const InfoWrapper = styled.div`
	margin: auto 0 auto 1rem;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 0 1rem auto;
	}
`;

export const CopyWrapper = styled.div`
	margin: auto 0 auto auto;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 0 0.5rem auto;
	}
`;

export const AdminWrapper = styled.div`
	margin: auto 0 auto auto;

	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 0 auto auto;
	}
`;
