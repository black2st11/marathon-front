import styled from 'styled-components'
import { fontSize, colorPalette, viewSize } from '../../../config'

export const Container = styled.div`
    display: flex;
`

export const Link = styled.a`
    font-size : ${props => props.fontSize ? props.fontSize.desktop : fontSize.base};
    text-align : center;
    color : ${props => props.color ? props.color : colorPalette.black};
    text-decoration : none;

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.base};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.base};
    };
`;