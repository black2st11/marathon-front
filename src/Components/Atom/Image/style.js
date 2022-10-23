import styled from 'styled-components'

export const Image = styled.img`
    width : 100%;
    border : ${props => props.border ? props.border : 'none'};
    border-radius : ${props => props.borderRadius && props.borderRadius};
`