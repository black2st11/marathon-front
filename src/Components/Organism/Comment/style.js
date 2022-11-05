import styled from "styled-components";
import { colorPalette } from "../../../config";

export const Container = styled.div`
    width : 100%;
    border-top : 1px solid ${colorPalette.noneBorder};
    border-bottom : 1px solid ${colorPalette.noneBorder};
    padding : 2.75rem 0;
`

export const TitleWrapper = styled.div`
    margin-bottom : 1rem;
    
    > span {
        padding : 0.25rem 1.5rem;
        border-radius : 1rem;
        border : 1px solid ${colorPalette.secondary};
    }
`

export const ContentWrapper = styled.div`
    margin-left : 1rem;
`