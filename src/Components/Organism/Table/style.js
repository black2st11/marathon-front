import styled from "styled-components";
import { colorPalette, defaultSize } from "../../../config";

export const Container = styled.table`
    border-spacing: 0;
    border-collapse : separate;
    width : 100%;
`

export const Thead = styled.thead`
`

export const Th = styled.th`
    background-color : ${colorPalette.card};
    padding : 1.5rem 0;

    &:first-child{
        border-radius : 34px 0 0 34px;
    }

    &:last-child{
        border-radius : 0 34px 34px 0;
    }
`

export const Tr = styled.tr``

export const Tbody = styled.tbody``

export const Td = styled.td`
    text-align : center;
    padding : 1.5rem 0;
    border-bottom : 1px solid ${colorPalette.gray};
`