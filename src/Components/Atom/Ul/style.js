import styled from "styled-components";
import { colorPalette, fontSize, fontWeight, defaultSize, viewSize } from '../../../config'


export const Container = styled.ul`
    list-style : none;
    padding-inline-start: 0px;
`

export const CircleLi = styled.li`
    white-space : pre-line;
    line-height: 30px;
    display : flex;
    margin : 1rem 0;
    &:before {
        content: '\\2022';  
        color: ${props => props.color ? props.color : colorPalette.primary}; 
        display: inline-block; 
        font-size : 2rem;
        margin-right : 0.5rem;
    }
`

export const NoneLi = styled.li`
    white-space : pre-line;
    line-height: 30px;
    display : flex;
    margin : 1rem 0;
`

export const TitleLi = styled.li`
    white-space : pre-line;
    line-height: 30px;
    display : flex;
    align-items : baseline;
    margin : 1rem 0;

    @media screen and (max-width : ${viewSize.mobile}){
        flex-direction : column;
    }
`

export const Title = styled.div`
    background-color ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    display : flex;
    height : ${props => props.height ? props.height : defaultSize.li.desktop.titleHeight};
    width : ${props => props.type == 'long' ? defaultSize.li.desktop.titleLongWidth : defaultSize.li.desktop.titleWidth};
    min-width : ${props => props.type == 'long' ? defaultSize.li.desktop.titleLongWidth : defaultSize.li.desktop.titleWidth};
    border-radius : 1rem;
    padding : 0.125rem 0.25rem;
    margin-right : 1rem;
    align-items : center;
    justify-content : center;
`

export const Contents = styled.div`
    display : flex;
    flex-direction : column;
`