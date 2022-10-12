import React from 'react'
import { Container, Text, Icon } from './style'

const Button = ({ children, onClick, icon, isRounded, height, bgColor, color, type }) => {
    return (
        <Container onClick={onClick} isRounded={isRounded} height={height} bgColor={bgColor}>
            <Text color={color}>
                {children}
            </Text>
            {icon && (<Icon src={icon}></Icon>)}
        </Container>
    )
}

export default Button       