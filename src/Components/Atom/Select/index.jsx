import React from 'react'
import { Container, Select as StyledSelect, Option } from './style'


const Select = ({ onChange, fontSize, fontWeight, border, borderRadius, height, options = [], value, name, placeholder = '선택' }) => {

    const selectProps = {
        name,
        onChange,
        value,
        height,
        fontSize,
        fontWeight,
        borderRadius,
        border,
        selected: value !== ''
    }


    return (
        <StyledSelect {...selectProps}>
            <Option value='' hidden={true}>{placeholder}</Option>
            {options.map((option, index, array) => (<Option key={index} value={option.value}>{option.name}</Option>))}
        </StyledSelect>
    )
}

export default Select