import styled from "styled-components";
import { colorPalette } from "../../../config";

export const Container = styled.div`
    width: 100%;
    padding : 2rem;
    background-color : ${props => props.bgColor ? props.bgColor : colorPalette.card};
    border-radius : 0.75rem;
    box-sizing : border-box;
`
