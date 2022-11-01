import React from 'react'
import { Container, Input as StyledInput } from './style'
import { defaultSize } from '../../../config'
import { passValue } from '../../../util/validator'

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
    pattern
}) => {

    const inputProps = {
        name,
        value,
        placeholder,
        fontSize,
        onChange: (e) => {
            if (pattern) {
                e.target.value = passValue(e.target.value, pattern)
            }
            onChange(e)
        },
        onBlur: onFocusOut,
        border,
        height,
        borderRadius,
        pattern
    }

    return (
        <Container>
            <StyledInput {...inputProps} />
        </Container>
    )
}

export default Input