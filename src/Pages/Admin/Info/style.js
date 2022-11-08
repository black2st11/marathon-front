import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
`

export const RowWrapper = styled.div`
    display : flex;
`

export const ButtonWrapper = styled.div`
    display : flex;
    justify-content : flex-end;

    > button { 
        width : 160px;
    }
`