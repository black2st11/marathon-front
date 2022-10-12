import styled from "styled-components";
import { colorPalette, fontSize, fontWeight } from '../../../config'


export const Container = styled.ul`
    list-style : none;
`

export const CircleLi = styled.li`
    white-space : pre-line;
    line-height: 20px;
    display : flex;
    &:before {
        content: '\\2022';  
        color: ${props => props.color ? props.color : colorPalette.primary}; 
        display: inline-block; 
        width: 1em; 
        margin-left: -2em;
        margin-right: -0.125em;
        font-size : 2rem;
    }
`

export const TitleLi = styled.li`
    white-space : pre-line;
    line-height: 24px;
    display : flex;
`

export const Title = styled.div`
    background-color ${props => props.bgColor ? props.bgColor : colorPalette.primary};
    color : ${props => props.color ? props.color : colorPalette.white};
    display : flex;
    height : 2rem;
    border-radius:1rem;
    padding : 0.125rem 0.25rem;
    font-size : ${props => props.fontSize ? props.fontSize : fontSize.base};
    font-weight: ${props => props.fontWeight ? props.fontWeight : fontWeight.base};
    margin-right : 1rem;
    align-items : center;
    justify-content : center;
`