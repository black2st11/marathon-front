import styled from 'styled-components'
import { fontSize, colorPalette, defaultSize, viewSize } from '../../../config/index'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`

export const WarnWrapper = styled.div`
    color: ${(props) => props.warnColor ? props.warnColor : colorPalette.warn};
    visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
    min-height: 1.25rem;
    margin: ${(props) => props.margin ? props.margin : defaultSize.margin};
`

export const Input = styled.input`
    width: 100%;
    height: ${props => props.height ? props.height : defaultSize.inputHeight};
    border: 1px solid gray;
    font-size: ${props => props.fontSize ? props.fontSize.desktop : fontSize.base};
    padding : 1rem;
    box-sizing : border-box;

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.base};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.base};
    };
`