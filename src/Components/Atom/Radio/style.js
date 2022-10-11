import styled from "styled-components";
import { colorPalette } from '../../../config'

export const Container = styled.div`
    border : ${props => props.checked ? `1px solid ${colorPalette.primary}` : `1px solid ${colorPalette.gray}`};
    display : flex;
    align-items: center;
    justify-content : center;
    width : 6rem;
    height : 3rem;
`

export const Radio = styled.div``

export const HiddenRadio = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

export const Label = styled.label``

