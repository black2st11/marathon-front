import React from 'react'
import {
    Container, FormWrapper, RadioWrapper, RowWrapper, TextWrapper, WarnWrapper
} from './style'
import { Radio, Text } from '../../Atom'
import { TextForm } from '../index'

const RadioForm = ({
    text, englishText, value, required, category = 'default', onChange, items = [], name, warnText
}) => {

    const textProps = {
        text,
        englishText,
        category
    }

    return (
        <Container>
            <RowWrapper>
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
            </RowWrapper>
            <RowWrapper>
                <TextWrapper></TextWrapper>
                <WarnWrapper>
                    {warnText && (<Text {...warnText} />)}
                </WarnWrapper>
            </RowWrapper>
        </Container >
    )
}

export default RadioForm