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

export const FormWrapper = styled.div`
    display: flex;
    width : 80%;
    justify-content : space-between;
    @media only screen and (max-width: ${viewSize.tablet}){
        width: 100%;
    };
`

export const RadioWrapper = styled.div`
    width : 100%;
    margin-right : 5%;
    &:last-child{
        margin :auto;
    }
`