import styled from "styled-components";
import { colorPalette, defaultSize, fontSize, fontWeight } from '../../../config'

export const Container = styled.div`
    border : ${props => props.checked ? `1px solid ${colorPalette.primary}` : `1px solid ${colorPalette.gray}`};
    display : flex;
    align-items: center;
    justify-content : center;
    width : 100%;
    height : ${props => props.height ? props.height : defaultSize.inputHeight};
    box-sizing : border-box;
`

export const Radio = styled.div``

export const HiddenRadio = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

export const Label = styled.label`
    color : ${props => props.color ? props.color : colorPalette.black};
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight : ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
`
