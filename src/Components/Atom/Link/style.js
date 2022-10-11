import styled from 'styled-components'
import { fontSize, colorPalette } from '../../../config'

export const Container = styled.div`
    display: flex;
`

export const Link = styled.a`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    text-align : center;
    color : ${props => props.color ? props.color : colorPalette.black};
    text-decoration : none;
`;