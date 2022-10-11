import React from 'react'
import { Container, Select as StyledSelect, Option } from './style'


const Select = ({ setValue, options = [] }) => {
    return (
        <Container>
            <StyledSelect onChange={e => setValue(e.target.value)}>
                <Option value='' hidden={true}>선택</Option>
                {options.map((option, index, array) => (<Option key={index} value={option.value}>{option.name}</Option>))}
            </StyledSelect>
        </Container>
    )
}

export default Select