import React from 'react'
import { Container, FormWrapper, SelectWrapper, SelectsWrapper, WarnWrapper, TextWrapper, RowWrapper } from './style'
import { Select, Text } from '../../Atom'
import { TextForm } from '../index'
import { fontSize } from '../../../config'
import { warnText } from '../../../Pages/common'

const SelectForm = ({ text, englishText, select, selects = [], category = 'default', warnText }) => {

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
            <RowWrapper>
                <TextWrapper>
                    <TextForm {...textProps} />
                </TextWrapper>
                <FormWrapper>
                    <SelectWrapper isSingle={selects.length === 1}>
                        {generate()}
                    </SelectWrapper>

                </FormWrapper>
            </RowWrapper>
            <RowWrapper>
                <TextWrapper>

                </TextWrapper>
                <WarnWrapper>
                    {warnText && (<Text {...warnText} />)}
                </WarnWrapper>
            </RowWrapper>
        </Container >
    )
}

export default SelectForm