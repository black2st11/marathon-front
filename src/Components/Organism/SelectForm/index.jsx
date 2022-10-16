import React from 'react'
import { Container, FormWrapper, SelectWrapper, SelectsWrapper, WarnWrapper } from './style'
import { Select, Text } from '../../Atom'
import { TextForm } from '../index'
import { fontSize } from '../../../config'

const InputForm = ({ text, englishText, select, selects = [], category = 'default' }) => {

    const textProps = {
        text,
        englishText,
        category
    }

    const generate = () => {
        if (select) {
            return (<Select {...select} />)
        } else {
            return selects.map((select, index, array) => {
                return (
                    <SelectsWrapper key={index}>
                        <Select {...select} />
                    </SelectsWrapper>
                )
            })
        }
    }

    return (
        <Container>
            <TextForm {...textProps} />
            <FormWrapper>
                <SelectWrapper>
                    {generate()}
                </SelectWrapper>
                <WarnWrapper>
                    <Text></Text>
                </WarnWrapper>
            </FormWrapper>
        </Container >
    )
}

export default InputForm