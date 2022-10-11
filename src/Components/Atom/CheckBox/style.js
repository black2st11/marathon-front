import styled from "styled-components";
import { fontSize, colorPalette } from '../../../config'


export const Container = styled.div`
    display : flex;
    border ${props => props.checked ? `${props.border} ${colorPalette.primary}` : `${props.border} ${colorPalette.gray}`};
    width: 6rem;
    height: 3rem;
    align-items:center;
    justify-content:center;
`

export const HiddenCheckBox = styled.input`
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

export const CheckBox = styled.div`
    width : 1rem;
    height: 1rem;
    border : ${props => props.border ? props.border : ''}
`

export const Label = styled.label`
    font-size: ${props => props.fontSize ? props.fontSize : fontSize.base};
    color: ${props => props.color ? props.color : colorPalette.black};   
`