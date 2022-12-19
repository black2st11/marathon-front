import styled from 'styled-components';
import {colorPalette, viewSize} from '../../../config';

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media only screen and (max-width: ${viewSize.tablet}) {
		flex-direction: column;
		align-items: start;
	} ;
`;

export const RowWrapper = styled.div`
	display: flex;
	width: 100%;

	@media only screen and (max-width: ${viewSize.tablet}) {
		flex-direction: column;
		align-items: start;
	} ;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	width: 25%;
	margin-bottom: ${(props) => (props.noneValue ? '1.25rem' : '0')};
	@media only screen and (max-width: ${viewSize.tablet}) {
		width: 100%;
	} ;
`;

export const LongTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 20%;
	margin-bottom: ${(props) => (props.noneValue ? '1.25rem' : '0')};
	@media only screen and (max-width: ${viewSize.tablet}) {
		width: 100%;
		flex-direction: row;
		align-items: center;
	} ;
`;

export const NameWrapper = styled.div`
	width: 50%;
	text-align: left;
	@media only screen and (max-width: ${viewSize.tablet}) {
		margin-right: 1rem;
		width: fit-content;
	} ;
`;

export const EnglishNameWrapper = styled.div`
	width: 50%;
	text-align: left;
	@media only screen and (max-width: ${viewSize.tablet}) {
		width: auto;
		margin-left: 0px;
	} ;
`;

export const FormWrapper = styled.div`
	display: flex;
	width: 75%;

	@media only screen and (max-width: ${viewSize.tablet}) {
		width: 100%;
	} ;
`;

export const ButtonWrapper = styled.div`
    display : flex;
    height : 46px;
    margin 0.25rem 1.625rem;
    width : 146px;
    min-width : 146px;
`;

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
`;

export const InputWithButtonWrapper = styled.div`
	width: 100%;
	max-width: 250px;
`;

export const Sep = styled.div`
	height: 1px;
	width: 0.875rem;
	background-color: ${colorPalette.noneBorder};
	margin: auto 2.5%;
`;

export const TextSep = styled.div`
	width: 15%;
	margin: auto 2.5%;
	text-align: left;

	&:last-child {
		margin-right: 0;
		text-align: right;
	}
`;

export const WarnWrapper = styled.div`
	width: 75%;
	margin-top: 0.25rem;
`;
