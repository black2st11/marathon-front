import React from 'react'
import { Container, Input as StyledInput } from './style'
import { defaultSize } from '../../../config'


const Input = ({
    placeholder,
    name,
    value,
    onChange,
    border,
    borderRadius,
    fontSize = {},
    height = defaultSize.inputHeight,
    onFocusOut,
}) => {

    const inputProps = {
        name,
        value,
        placeholder,
        fontSize,
        onChange: (e) => onChange(e),
        onBlur: onFocusOut,
        border,
        height,
        borderRadius
    }

    return (
        <Container>
            <StyledInput {...inputProps} />
        </Container>
    )
}

export default Input