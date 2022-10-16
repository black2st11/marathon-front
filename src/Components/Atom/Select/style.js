import styled from "styled-components";
import { defaultSize, fontSize, fontWeight, colorPalette, viewSize } from '../../../config'

export const Container = styled.div`
    width : 100%;
`

export const Select = styled.select`
    padding: 1rem;
    width : 100%;
    height : ${props => props.height ? props.height : defaultSize.inputHeight};
    font-size : ${props => props.fontSize ? props.fontSize.desktop : fontSize.base};
    font-weight : ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
    color : ${props => props.selected ? colorPalette.black : colorPalette.placeholder};
    border : ${props => props.selected ? `1px solid ${colorPalette.border}` : `1px solid ${colorPalette.border}`};
    box-sizing : border-box;
    text-align : center;

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.base};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.base};
    };
`

export const Option = styled.option``