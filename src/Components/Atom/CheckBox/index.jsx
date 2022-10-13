import React, { useState } from 'react'
import { Container, HiddenCheckBox, CheckBox as StyledCheckBox, Label } from './style'

import { colorPalette } from '../../../config'

const CheckBox = ({ Icon, color = colorPalette.white, bgColor = colorPalette.primary, value, onChange }) => {
    const [focus, setFocus] = useState(false)
    return (
        <Container onClick={onChange} checked={value} border={focus || value ? `1px solid ${bgColor}` : ''} bgColor={value ? bgColor : colorPalette.white}>
            <HiddenCheckBox value={value} type='checkbox' onChange={onChange} checked={value} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            <Icon stroke={value ? color : colorPalette.placeholder} />
        </Container>
    )
}

export default CheckBox