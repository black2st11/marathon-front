import styled from "styled-components";

export const Container = styled.div`
    width : 100%;
    height : ${props => props.height ? props.height : '492px'};
`