import styled from 'styled-components'
import { fontSize, colorPalette, defaultSize } from '../../../config/index'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`

export const WarnText = styled.span`
    font-size: ${(props) => props.fontSize ? props.fontSize : fontSize.base};
    color: ${(props) => props.warnColor ? props.warnColor : colorPalette.warn};
    visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
    min-height: 1.25rem;
    margin: ${(props) => props.margin ? props.margin : defaultSize.margin};
`

export const Input = styled.input`
    width: 100%;
    height: ${props => props.height ? props.height : defaultSize.inputHeight};
    border: 1px solid gray;
    font-size: ${props => props.fontSize ? props.fontSize : fontSize.base};
    padding : 1rem;
    box-sizing : border-box;
`