import styled from "styled-components";
import { viewSize } from "../../../config";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
`

export const TitleWrapper = styled.div`
    margin-bottom : 1.5rem;

    @media screen and (max-width : ${viewSize.tablet}){
        margin-bottom : 1.25rem;
    }
`

export const SubTitleWrapper = styled.div`
    margin-bottom : 1.25rem;

    @media screen and (max-width : ${viewSize.tablet}){
        margin-bottom : 1rem;
    }
`

export const CardWrapper = styled.div``