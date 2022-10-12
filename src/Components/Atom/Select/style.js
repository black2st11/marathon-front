import styled from "styled-components";
import { defaultSize, fontSize, fontWeight, colorPalette } from '../../../config'

export const Container = styled.div`
    
`

export const Select = styled.select`
    padding: 1rem;
    font-size:2rem;
    border-radius: 1rem;
    width : 100%;
    height : ${props => props.height ? props.height : defaultSize.inputHeight};
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight : ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
    color : ${props => props.selected ? colorPalette.black : colorPalette.placeholder};
    border : ${props => props.selected ? colorPalette.border : colorPalette.noneBorder};
    box-sizing : border-box;
`

export const Option = styled.option``