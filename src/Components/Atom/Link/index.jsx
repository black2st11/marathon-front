import React from 'react'
import { Container, Link as StyledLink } from './style'

const Link = ({ children, href = '', color = {}, size = {} }) => {
    return (
        <Container>
            <StyledLink href={href} color={color.text} fontSize={size.fontSize}>{children}</StyledLink>
        </Container>
    )
}

export default Link