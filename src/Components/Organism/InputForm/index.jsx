import React from 'react'
import { Container, TextWrapper, LongTextWrapper, InputWrapper, NameWrapper, EnglishNameWrapper, FormWrapper, ButtonWrapper } from './style'
import { Input, Text, Button } from '../../Atom'
import { TextForm } from '../index'

const InputForm = ({ text, englishText, validator, value, onChange, required, category = 'default', button, onClick, isRounded }) => {

    const inputProps = {
        onChange,
        value,
        validator,
        required
    }

    const buttonProps = {
        children: button,
        onClick,
        isRounded
    }

    const textProps = {
        text,
        englishText,
        category
    }

    const inputGenerate = () => {
        if (button) {
            return (
                <>
                    <InputWrapper>
                        <Input {...inputProps} />
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button {...buttonProps} />
                    </ButtonWrapper>
                </>
            )
        }
        return (<Input {...inputProps} />)
    }

    return (
        <Container>
            <TextForm {...textProps} />
            <FormWrapper>{inputGenerate()}</FormWrapper>
        </Container >
    )
}

export default InputForm