import React from 'react'
import { colorPalette } from '../../../config'
import { Container, HiddenRadio, Label } from './style'

const Radio = ({ children, border, name, color, setValue, checked, value, Icon }) => {
    return (
        <Container onClick={setValue} checked={checked} border={border}>
            <HiddenRadio
                name={name} value={value} type='radio' onFocus={setValue} checked={checked}
            />
            <Label>
                {children}
            </Label>
            {Icon && (<Icon stroke={checked ? colorPalette.primary : colorPalette.placeholder} />)}
        </Container>
    )
}

export default Radio