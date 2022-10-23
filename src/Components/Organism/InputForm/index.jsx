import React from 'react'
import { Container, TextWrapper, LongTextWrapper, InputWrapper, NameWrapper, EnglishNameWrapper, FormWrapper, ButtonWrapper, Sep, InputWithButtonWrapper } from './style'
import { Input, Text, Button } from '../../Atom'
import { TextForm } from '../index'


const MultipleInput = ({ inputs = [], sep }) => (
    <React.Fragment>
        {inputs.map((input, index, array) => (
            <InputWrapper>
                <Input {...input} />
                {(sep && index !== inputs.length) && (<Sep />)}
            </InputWrapper>
        ))}
    </React.Fragment>
)

const InputGenerate = ({ input, button, inputs, sep }) => {
    const inputsProps = {
        inputs,
        sep
    }
    if (button) {
        return (
            <React.Fragment>
                <InputWithButtonWrapper>
                    <Input {...input} />
                </InputWithButtonWrapper>
                <ButtonWrapper>
                    <Button {...button} height='46px' />
                </ButtonWrapper>
            </React.Fragment>
        )
    } else if (inputs) {
        return (
            <MultipleInput {...inputsProps} />
        )
    }
    return (<Input {...input} />)
}

const InputForm = ({
    text,
    inputs,
    input,
    sep = false,
    englishText,
    validator,
    required,
    category = 'default',
    button,
}) => {
    const textProps = {
        text,
        englishText,
        category
    }

    const inputProps = {
        inputs,
        input,
        sep,
        button
    }


    return (
        <Container>
            <TextWrapper>
                {text && (<TextForm {...textProps} />)}
            </TextWrapper>
            <FormWrapper>
                <InputGenerate {...inputProps} />
            </FormWrapper>
        </Container >
    )
}

export default InputForm