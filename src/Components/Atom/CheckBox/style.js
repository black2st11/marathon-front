import styled from "styled-components";
import { fontSize, colorPalette, defaultSize, fontWeight } from '../../../config'


export const Container = styled.div`
    display : flex;
    border ${props => props.border ? props.border : `1px solid ${colorPalette.border}}`};
    background-color: ${props => props.bgColor ? props.bgColor : colorPalette.white};
    border-radius : ${props => props.borderRadius ? props.borderRadius : '0'};
    align-items:center;
    justify-content:center;
    box-sizing : border-box;
    width : 1.25rem;
    height : 1.25rem;    
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