import styled from 'styled-components'
import { colorPalette } from '../../../config'

export const Container = styled.div``

export const FileInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`

export const Label = styled.label`
    background-color : ${props => props.bgColor ? props.bgColor : colorPalette.file};
    border-radius : ${props => props.borderRadius ? props.borderRadius : '0.75rem'};
    border : ${props => props.border ? props.border : `1px solid ${colorPalette.border}`};
    padding : 0.75rem 2rem;
    
`