import React from 'react'
import { Container, FormWrapper, SelectWrapper, SelectsWrapper, warnWrapper } from './style'
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
                    <SelectsWrapper>
                        <Select {...select} />
                        <Text>{select.postFix}</Text>
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
                <warnWrapper>
                    <Text></Text>
                </warnWrapper>
            </FormWrapper>
        </Container >
    )
}

export default InputForm