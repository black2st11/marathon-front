import React from 'react'
import { Container, HiddenRadio, Radio as StyledRadio, Label } from './style'

const Radio = ({ children, border, name, color, setValue, checked, value }) => {
    return (
        <Container onClick={setValue} checked={checked} border={border}>
            <HiddenRadio name={name} value={value} type='radio' onFocus={setValue} checked={checked} readOnly />
            <Label>
                {children}
            </Label>
            <StyledRadio />

        </Container>
    )
}

export default Radio