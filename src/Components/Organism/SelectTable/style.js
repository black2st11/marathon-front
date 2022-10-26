import styled from "styled-components";
import { colorPalette, viewSize } from "../../../config";

export const Container = styled.div`
    display : ${props => props.display ? props.display.desktop : 'flex'};
    flex-direction : column;
    width : 100%;

    @media screen and (max-width : ${viewSize.tablet}){
        display : ${props => props.display ? props.display.tablet : 'flex'};
    }

    @media screen and (max-width : ${viewSize.mobile}){
        display : ${props => props.display ? props.display.mobile : 'flex'};
    }
`

export const Row = styled.div`
    display : flex;
    width : 100%;

    border-bottom : 1px solid ${colorPalette.border};
    
    &:first-child{
        border-top : 1px solid ${colorPalette.border};
    }

    @media screen and (max-width : ${viewSize.tablet}){
        flex-direction : column;
        border : none;
    }
`



export const ItemWrapper = styled.div`
    display : flex;
    width : 100%;

    @media screen and (max-width : ${viewSize.tablet}){
        border-bottom : 1px solid ${colorPalette.border};
    }
`

export const SolidHead = styled.div`
    width : 10rem;
    min-height : 3.75rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${colorPalette.card};
    box-sizing : border-box;
    padding : 1.25rem 0;


    @media screen and (max-width : ${viewSize.tablet}){
        min-width : 9rem;
        width : 9rem;
    }

    @media screen and (max-width : ${viewSize.mobile}){
        min-width : 6.25rem;
        width : 6.25rem;
    }
`

export const SolidContent = styled.div`
    min-height : 3.75rem;
    display : flex;
    align-items : center;
    padding-left : 1rem;
    box-sizing : border-box;
    padding : 1.25rem;
`

export const MultipleContent = styled.div`
    min-height : 3.75rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    box-sizing : border-box;
    margin: auto;
    padding : 1.25rem 0;
`


export const ItemsWrapper = styled.div`
    display : flex;
    width : 100%;

    @media screen and (max-width : ${viewSize.tablet}){
        border-bottom : 1px solid ${colorPalette.border};
    }
`

export const Head = styled.div`
    width : 10rem;
    min-height : 3.75rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${colorPalette.card};
    box-sizing : border-box;
    padding : 1.25rem;

    @media screen and (max-width : ${viewSize.tablet}){
        min-width : 9rem;
        width : 9rem;
    }

    @media screen and (max-width : ${viewSize.mobile}){
        min-width : 6.25rem;
        width : 6.25rem;
    }
`

export const Content = styled.div`
    min-height : 3.75rem;
    display : flex;
    align-items : center;
    padding-left : 1rem;
    box-sizing : border-box;
    padding : 1.25rem;
`