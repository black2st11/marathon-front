import React from 'react'
import { Container, FormWrapper, SelectWrapper, SelectsWrapper, WarnWrapper, TextWrapper } from './style'
import { Select, Text } from '../../Atom'
import { TextForm } from '../index'
import { fontSize } from '../../../config'

const SelectForm = ({ text, englishText, select, selects = [], category = 'default' }) => {

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
                    <SelectsWrapper key={index} >
                        <Select {...select} />
                    </SelectsWrapper>
                )
            })
        }
    }

    return (
        <Container>
            <TextWrapper>
                <TextForm {...textProps} />
            </TextWrapper>
            <FormWrapper>
                <SelectWrapper isSingle={selects.length === 1}>
                    {generate()}
                </SelectWrapper>
                <WarnWrapper>
                    <Text></Text>
                </WarnWrapper>
            </FormWrapper>
        </Container >
    )
}

export default SelectForm