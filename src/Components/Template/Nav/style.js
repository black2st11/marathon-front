import styled from 'styled-components';
import {colorPalette, defaultSize, viewSize} from '../../../config';

export const Container = styled.div`
    width : 100%;
    position : fixed;
    top :0;
    background-color ${(props) =>
		props.bgColor ? props.bgColor : colorPalette.white};
    box-shadow : 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    display : flex;
    flex-direction: column;
    align-items : center;
    
`;

export const NavWrapper = styled.div`
	width: 98%;
	max-width: ${defaultSize.desktopContainer};
	display: flex;
	align-items: center;
	height: ${defaultSize.nav.desktop};
	margin: auto;

	@media screen and (min-width: ${viewSize.mobile}) and( max-width : ${viewSize.tablet}) {
		max-width: ${defaultSize.tabletContainer};
		height: ${defaultSize.nav.tablet};
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		max-width: ${defaultSize.mobileContainer};
		height: ${defaultSize.nav.mobile};
	}
`;

export const LogoWrapper = styled.img`
	cursor: pointer;
	@media screen and (max-width: ${viewSize.mobile}) {
		display: none;
	}
`;

export const MenuWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: auto 0 auto auto;
	width: 50%;

	@media screen and (max-width: ${viewSize.tablet}) {
		display: none;
	}
`;

export const ButtonWrapper = styled.div`
	margin: auto 0 auto 2.75rem;
	width: 140px;
	@media screen and (max-width: ${viewSize.tablet}) {
		margin: auto 1.25rem auto auto;
	}

	@media screen and (max-width: ${viewSize.mobile}) {
		margin: auto auto auto 0;
	}
`;

export const IconWrapper = styled.div`
	display: none;
	cursor: pointer;
	margin: auto 0;
	@media screen and (max-width: ${viewSize.tablet}) {
		display: flex;
	}
`;

export const SubMenuContainer = styled.div`
	width: 100%;
	display: ${(props) => (props.isHidden ? 'none' : 'flex')};
	border-top: 1px solid ${colorPalette.border};

	@media screen and (max-width: ${viewSize.tablet}) {
		display: none;
	}
`;

export const SubMenuWrapper = styled.div`
	width: 100%;
	max-width: ${defaultSize.desktopContainer};
	display: flex;
	justify-content: space-between;
	margin: auto;
`;

export const SubMenu = styled.div`
	display: flex;
	flex-direction: column;
	border-right: 1px solid ${colorPalette.border};
	width: 100%;
	align-items: center;

	&:first-child {
		border-left: 1px solid ${colorPalette.border};
	}
`;

export const TitleWrapper = styled.div`
	margin: 1.75rem 2rem;
`;

export const Menu = styled.div`
	margin-bottom: 1.75rem;
`;

export const MobileContainer = styled.div`
	background-color: white;
	display: none;
	height: 100vh;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: ${viewSize.tablet}) {
		display: ${(props) => (props.isHidden ? 'none' : 'flex')};
	}
`;

export const MobileNavWrapper = styled.div`
	margin: 7rem auto;
	flex-wrap: wrap;
	justify-content: space-between;
	display: flex;

	@media screen and (max-width: ${viewSize.mobile}) {
		margin: 1rem auto;
	}
`;

export const MobileMenu = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Fake = styled.div`
	height: 85px;
	width: 100%;

	@media screen and (max-width: ${viewSize.mobile}) {
		height: 70px;
	}
`;
