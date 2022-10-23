import styled from "styled-components";
import { colorPalette } from "../../../config";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
`

export const TitleWrapper = styled.div`
    background-color : ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    padding : ${props => props.padding ? props.padding : '0.25rem 1.75rem'};
    border-radius : ${props => props.borderRadius ? props.borderRadius : '1.25rem'};
    width : fit-content;
`