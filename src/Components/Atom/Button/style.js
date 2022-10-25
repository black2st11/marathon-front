import styled from "styled-components";

import { defaultSize, colorPalette, fontSize, fontWeight } from '../../../config'

export const Container = styled.button`
    width: 100%;
    background-color: ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    border-radius: ${props => props.isRounded ? '2rem' : '0'};
    height : ${props => props.height ? props.height : defaultSize.minButtonHeight};
    border : ${props => props.border ? props.border : 'none'};
    cursor : pointer;
    box-sizing : border-box;
    text-align : center;
    padding : ${props => props.padding ? props.padding : '0'};
`

export const Icon = styled.img``