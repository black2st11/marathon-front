import styled from "styled-components";
import { viewSize } from '../../../config'


export const Container = styled.div`
    display:flex;
    width :100%;
    align-items : center;
    justify-content : center;

    @media only screen and (max-width: ${viewSize.tablet}){
        flex-direction : column;
        align-items : start;
    };
`

export const TextWrapper = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : start;
    width : 20%;
    margin-bottom : ${props => props.noneValue ? '1.25rem' : '0'};
    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
    };
`

export const LongTextWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : start;
    width : 20%;
    margin-bottom : ${props => props.noneValue ? '1.25rem' : '0'};
    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
        flex-direction : row;
        align-items : center;
    };
`

export const NameWrapper = styled.div`
    width : 50%;
    text-align : left;
    @media only screen and (max-width: ${viewSize.tablet}){
        margin-right : 1rem;
        width : fit-content;
    };
`

export const EnglishNameWrapper = styled.div`
    width : 50%;
    text-align : left;
    @media only screen and (max-width: ${viewSize.tablet}){
        width: auto;
        margin-left : 0px;
    };
`

export const FormWrapper = styled.div`
    display: flex;
    width : 80%;

    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
    };
`

export const ButtonWrapper = styled.div`
    display : flex;
    height : 46px;
    margin 0.25rem 1.625rem;
`
export const InputWrapper = styled.div`
    width : 100%;
    max-width : 250px;
`