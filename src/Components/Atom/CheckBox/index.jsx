import React, { useState } from 'react'
import { Container, HiddenCheckBox, CheckBox as StyledCheckBox, Label } from './style'


const CheckBox = ({ children, value, name, border, checked, setValue }) => {
    return (
        <Container onClick={setValue} checked={checked} border={border}>
            <HiddenCheckBox name={name} value={value} type='checkbox' onChange={setValue} checked={checked} readOnly />
            <Label>
                {children}
            </Label>
            <StyledCheckBox />

        </Container>
    )
}

export default CheckBox