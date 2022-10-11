import styled from "styled-components";
import { fontSize } from '../../../config'


export const Container = styled.div``

export const Span = styled.span`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base}
`

export const P = styled.p`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base}
`

export const H1 = styled.h1`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl7}
`

export const H2 = styled.h2`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl5}
`

export const H3 = styled.h3`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl3}
`