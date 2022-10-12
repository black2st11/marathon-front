import styled from "styled-components";
import { fontSize, fontWeight } from '../../../config'


export const Container = styled.div`
    display:flex;
    align-items : center;
    justify-content : center;
`

export const Span = styled.span`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
`

export const P = styled.p`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
`

export const H1 = styled.h1`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl7};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};
`

export const H2 = styled.h2`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl5};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};
`

export const H3 = styled.h3`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl3};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};
`