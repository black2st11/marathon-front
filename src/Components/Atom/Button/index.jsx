import React from 'react'
import { Container } from './style'
import { Text } from '../index'
const Button = ({ onClick, Icon, isRounded, height, bgColor, text }) => {
    const buttonProps = {
        onClick,
        isRounded,
        height,
        bgColor,
    }

    return (
        <Container {...buttonProps}>
            <Text {...text} />
            {Icon && <Icon />}
        </Container>
    )
}

export default Button       