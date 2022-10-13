import React from 'react'
import { Container, Select as StyledSelect, Option } from './style'


const Select = ({ onChange, options = [], value, placeholder = '선택' }) => {
    return (
        <StyledSelect selected={value} onChange={e => onChange(e.target.value)}>
            <Option value='' hidden={true}>{placeholder}</Option>
            {options.map((option, index, array) => (<Option key={index} value={option.value}>{option.name}</Option>))}
        </StyledSelect>
    )
}

export default Select