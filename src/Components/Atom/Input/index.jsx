import React, { useState } from 'react'
import { Container, WarnText, Input as StyledInput } from './style'
import { defaultValidator } from '../../../util/validator'
import { InputTypeCheck } from '../../../util/textCheck'


const Input = ({ placeholder, required = false, inputType = 'normal', color = {}, size = {}, validator = defaultValidator }) => {
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
            <StyledInput placeholder={placeholder} fontSize={size.fontSize} value={text} onChange={onChangeText} onBlur={onFocusOut} />
            <WarnText fontSize={size.fontSize} color={color.warn} visible={invalid.status}>
                {invalid.message}
            </WarnText>
        </Container>
    )
}

export default Input