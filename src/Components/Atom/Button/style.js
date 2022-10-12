import styled from "styled-components";

import { defaultSize, colorPalette, fontSize, fontWeight } from '../../../config'

export const Container = styled.button`
    width: 100%;
    height : 100%;
    background-color: ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    border-radius: ${props => props.isRounded ? '2rem' : '0'};
    border : none;
    cursor : pointer;
    box-sizing : border-box;
    min-width : 140px;
    text-align : center;
`

export const Text = styled.span`
    color : ${props => props.color ? props.color : colorPalette.white};
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight : ${props => props.fontWeight ? props.fontWeight : fontWeight.base}
`

export const Icon = styled.img``