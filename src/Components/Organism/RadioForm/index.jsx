import React from 'react'
import {
    Container, FormWrapper, RadioWrapper, TextWrapper
} from './style'
import { Radio } from '../../Atom'
import { TextForm } from '../index'

const RadioForm = ({
    text, englishText, value, required, category = 'default', onChange, items = [], name
}) => {

    const textProps = {
        text,
        englishText,
        category
    }

    return (
        <Container>
            <TextWrapper>
                <TextForm {...textProps} />
            </TextWrapper>
            <FormWrapper isLong={items.length >= 3}>
                {items.map((item, index, array) => (
                    <RadioWrapper key={index}>
                        <Radio name={name} value={item.value} onChange={onChange} checked={item.value == value}>
                            {item.children}
                        </Radio>
                    </RadioWrapper>
                ))}
            </FormWrapper>
        </Container >
    )
}

export default RadioForm