import React, { useState } from 'react'
import { Container, WarnWrapper, Input as StyledInput } from './style'
import { Text } from '../index'
import { defaultValidator } from '../../../util/validator'
import { InputTypeCheck } from '../../../util/textCheck'


const Input = ({ placeholder, required = false, inputType = 'normal', color = {}, fontSize = {}, validator = defaultValidator }) => {
    const [text, setText] = useState('')
    const [invalid, setInvalid] = useState({ status: false, message: '' })
    const onChangeText = (e) => {
        let validText = e.target.value.replace(InputTypeCheck[inputType], '')
        setText(validText)
    }

    const onFocusOut = () => {
        let res = validator(text)

        if (res.invalid) {
            setInvalid({ status: res.invalid, message: res.message })
        } else {
            setInvalid({ status: res.invalid, message: '' })
        }
    }

    return (
        <Container>
            <StyledInput placeholder={placeholder} fontSize={fontSize} value={text} onChange={onChangeText} onBlur={onFocusOut} />
            <WarnWrapper color={color.warn} visible={invalid.status}>
                <Text fontSize={fontSize} color={color.warn}>
                    {invalid.message}
                </Text>
            </WarnWrapper>
        </Container>
    )
}

export default Input