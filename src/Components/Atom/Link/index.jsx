import React from 'react'
import { Container, Link as StyledLink } from './style'

const Link = ({ children, href = '', color, fontSize }) => {
    return (
        <Container>
            <StyledLink href={href} color={color} fontSize={fontSize}>{children}</StyledLink>
        </Container>
    )
}

export default Link