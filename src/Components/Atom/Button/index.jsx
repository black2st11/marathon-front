import React from 'react'
import { Container } from './style'
import { Text } from '../index'
const Button = ({ children, onClick, Icon, isRounded, height, bgColor, color, type, fontSize, fontWeight, }) => {
    const buttonProps = {
        onClick,
        isRounded,
        height,
        bgColor,
    }

    const textProps = {
        fontSize,
        fontWeight,
        color,
        children
    }
    return (
        <Container {...buttonProps}>
            <Text {...textProps} />
            {Icon && <Icon />}
        </Container>
    )
}

export default Button       