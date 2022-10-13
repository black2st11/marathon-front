import styled from "styled-components";
import { fontSize, fontWeight, viewSize } from '../../../config'


export const Container = styled.div`
    display:flex;
    align-items : center;
    justify-content : center;
`

export const Span = styled.span`
    font-size : ${props => props.fontSize ? props.fontSize.desktop : fontSize.base};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.base};

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.base};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.base};
    };
`

export const P = styled.p`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.base};

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.base};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.base};
    };
`

export const H1 = styled.h1`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl7};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.xl5};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.xl5};
    };
`

export const H2 = styled.h2`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl5};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.xl3};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.xl3};
    };
`

export const H3 = styled.h3`
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.xl3};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.bold};

    @media only screen and (min-width : ${viewSize.mobile} and max-width: ${viewSize.tablet}){
        font-size : ${props => props.fontSize ? props.fontSize.tablet : fontSize.xl};
    };

    @media only screen and (max-width: ${viewSize.mobile}){
        font-size : ${props => props.fontSize ? props.fontSize.mobile : fontSize.xl};
    };
`