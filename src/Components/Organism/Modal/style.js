import styled from "styled-components";
import { colorPalette } from "../../../config";

export const Container = styled.div`
    width : 100vw;
    height: 100vh;
    position : fixed;
    top : 0;
    left : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgba(0, 0, 0, 0.7);
`

export const Modal = styled.div`
    min-width : 100px;
    min-height; 100px;
    background-color : ${colorPalette.white};
    border-radius : 1.5rem;
`
export const ModalImg = styled.img`
    width : fit-content ;
`

export const TopWrapper = styled.div`
    padding : 1rem;
`

export const BottomWrapper = styled.div`
    padding : 1rem;
`