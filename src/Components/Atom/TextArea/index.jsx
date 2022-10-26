import React from 'react'
import * as S from './style'

const TextArea = ({
    placeholder,
    name,
    value,
    onChange,
    border,
    borderRadius,
    fontSize = {},
    onFocusOut,
}) => {
    const textareaProps = {
        name,
        value,
        placeholder,
        fontSize,
        onChange: (e) => onChange(e),
        onBlur: onFocusOut,
        border,
        borderRadius
    }
    return (
        <S.TextArea {...textareaProps} rows={30} />
    )
}

export default TextArea