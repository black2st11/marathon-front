import React from 'react'
import {
    Container, FormWrapper, RadioWrapper
} from './style'
import { Radio } from '../../Atom'
import { TextForm } from '../index'

const RadioForm = ({
    text, englishText, value, required, category = 'default', onChange, items = []
}) => {

    const textProps = {
        text,
        englishText,
        category
    }

    return (
        <Container>
            <TextForm {...textProps} />
            <FormWrapper>
                {items.map((item, index, array) => (
                    <RadioWrapper>
                        <Radio value={item.value} checked={item.value === value} onChange={onChange}>
                            {item.children}
                        </Radio>
                    </RadioWrapper>
                ))}
            </FormWrapper>
        </Container >
    )
}

export default RadioForm