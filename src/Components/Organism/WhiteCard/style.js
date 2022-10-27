import styled from "styled-components";
import { colorPalette, defaultSize } from "../../../config";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    background-color : ${colorPalette.white};
    width : ${defaultSize.whiteCard.desktop};
    padding : 4rem;
    box-sizing : border-box;
`

export const RowWrapper = styled.div`
    display : flex;
`

export const Title = styled.div`
    border-right: 1px solid ${colorPalette.cardBorder};
    width : 20%;
`

export const Contents = styled.div`
    width : 80%;
    margin-bottom : 2rem;
    padding-left : 2rem;
`