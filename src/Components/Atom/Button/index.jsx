import React from 'react'
import { Container, Text } from './style'

const Button = ({ children, onClick, Icon, isRounded, height, bgColor, color, type }) => {
    return (
        <Container onClick={onClick} isRounded={isRounded} height={height} bgColor={bgColor}>
            <Text color={color}>
                {children}
            </Text>
            <Icon />
        </Container>
    )
}

export default Button       