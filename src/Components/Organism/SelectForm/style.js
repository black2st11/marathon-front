import styled from "styled-components";
import { viewSize } from '../../../config'


export const Container = styled.div`
    display:flex;
    width :100%;
    align-items : center;
    justify-content : center;
    flex-direction : column;

    @media only screen and (max-width: ${viewSize.tablet}){
        flex-direction : column;
        align-items : start;
    };
`

export const RowWrapper = styled.div`
    width : 100%;
    display : flex;

    @media only screen and (max-width: ${viewSize.tablet}){
        flex-direction : column;
        align-items : start;
    };
`

export const FormWrapper = styled.div`
    display: flex;
    width : 75%;
    flex-direction : column;
    justify-content : space-between;

    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
    };
`

export const SelectWrapper = styled.div`
    display : flex;
    width : 100%;

    ${props => props.isSingle && 'max-width :378px;'}
`

export const SelectsWrapper = styled.div`
    display: flex;
    align-items : center;
    justify-content : center;
    width : 100%;
    margin-right : 5%;

    &:last-child{
        margin : 0;
    }
`

export const WarnWrapper = styled.div`
    width : 75%;
    margin-top: 0.25rem;
`

export const TextWrapper = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : start;
    width : 25%;
    margin-bottom : ${props => props.noneValue ? '1.25rem' : '0'};

    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
    };
`
