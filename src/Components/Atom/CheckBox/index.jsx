import React, { useState, useRef } from 'react'
import { Container, HiddenCheckBox, CheckBox as StyledCheckBox, Label } from './style'

import { colorPalette } from '../../../config'
import { FaCheck } from 'react-icons/fa'
const CheckBox = ({
    Icon = FaCheck,
    color = colorPalette.white,
    bgColor = colorPalette.primary,
    value,
    borderRadius,
    onChange,
    name
}) => {
    const [focus, setFocus] = useState(false)
    const ref = useRef()
    return (
        <Container
            onClick={() => onChange({
                target: {
                    name: name,
                    value: !value
                }
            })}
            checked={value}
            border={focus || value ? `1px solid ${bgColor}` : ''}
            bgColor={value ? bgColor : colorPalette.white}
            borderRadius={borderRadius}
        >
            <HiddenCheckBox
                ref={ref}
                name={name}
                value={value}
                type='checkbox'
                onChange={onChange}
                checked={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <Icon size={10} color={value ? color : colorPalette.placeholder} stroke={value ? color : colorPalette.placeholder} />
        </Container>
    )
}

export default CheckBox