import styled from "styled-components";
import { viewSize } from "../../../config";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100%;
`

export const BoardsWrapper = styled.div`
    width : 100%;
    margin-bottom : 4rem;
`

export const PagintaionWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;

    margin-top : -2.5rem;

    @media screen and (max-width :${viewSize.tablet}){
        margin : auto;
    }
`

export const ButtonnWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : end;
    align-items : center;

    > button {
        width : 6rem;
    }

    @media screen and (max-width :${viewSize.tablet}){
        margin-bottom : 1rem;
    }
`

