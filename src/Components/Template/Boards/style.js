import styled from 'styled-components';
import {colorPalette, viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 1.75rem 0;
	border-top: 2px solid ${colorPalette.primary};
	border-bottom: 1px solid ${colorPalette.boardBorder};
`;

export const Title = styled.div`
	display: ${(props) => (props.display ? props.display.desktop : 'flex')};
	flex: ${(props) => (props.flex ? props.flex : 1)};
	align-items: center;
	justify-content: center;
	@media screen and(max-width : ${viewSize.tablet}) {
		display: ${(props) => (props.display ? props.display.tablet : 'flex')};
	}

	@media screen and(max-width : ${viewSize.mobile}) {
		display: ${(props) => (props.display ? props.display.mobile : 'flex')};
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	padding: 1.5rem 0;
	box-sizing: border-box;
	border-bottom: 1px solid ${colorPalette.boardBorder};
	cursor: pointer;
`;

export const Content = styled.div`
	display: flex;
	flex: ${(props) => (props.flex ? props.flex : 1)};
	align-items: center;
	justify-content: center;

	@media screen and(max-width : ${viewSize.tablet}) {
		display: ${(props) => (props.display ? props.display.tablet : 'flex')};
	}

	@media screen and(max-width : ${viewSize.mobile}) {
		display: ${(props) => (props.display ? props.display.mobile : 'flex')};
	}
`;
