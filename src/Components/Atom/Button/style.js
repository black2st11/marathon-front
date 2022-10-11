import styled from "styled-components";

import { defaultSize, colorPalette, fontSize } from '../../../config'

export const Container = styled.button`
    display: flex;
    align-items : center;
    justify-content : center;
    width: 100%;
    height : ${props => props.height ? props.height : defaultSize.height};
    background-color: ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    border-radius: ${props => props.isRounded ? '1rem' : '0'};
    border : none;
    cursor : pointer;
`

export const Text = styled.span`
    color : ${props => props.color ? props.color : colorPalette.white};
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
`

export const Icon = styled.img``