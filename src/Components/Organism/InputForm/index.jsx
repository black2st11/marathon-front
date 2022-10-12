import React from 'react'
import { Container, TextWrapper, LongTextWrapper, InputWrapper, NameWrapper, EnglishNameWrapper, FormWrapper, ButtonWrapper } from './style'
import { Input, Text, Button } from '../../Atom'
import { fontSize } from '../../../config'

const InputForm = ({ name, englishName, validator, value, onChange, required, type = 'default', button, onClick }) => {

    const wrapperGenerate = () => {
        if (name) {
            return (
                <>
                    <NameWrapper>
                        <Text fontSize={fontSize.xl}>{name}</Text>
                    </NameWrapper>
                    <EnglishNameWrapper>
                        <Text fontSize={fontSize.base}>{englishName}</Text>

                    </EnglishNameWrapper>
                </>
            )
        }

        return (<></>)
    }

    const generate = () => {
        if (type == 'default') {
            return (
                <TextWrapper noneValue={name}>
                    {wrapperGenerate()}
                </TextWrapper>
            )
        } else if (type == 'long') {
            return (
                <LongTextWrapper noneValue={name}>
                    {wrapperGenerate()}
                </LongTextWrapper>
            )
        }
    }

    const inputGenerate = () => {
        if (button) {
            return (
                <>
                    <InputWrapper>
                        <Input />
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button onClick={onClick} isRounded={true}>{button}</Button>
                    </ButtonWrapper>
                </>
            )
        }
        return (<Input />)
    }

    return (
        <Container>
            {generate()}
            <FormWrapper>{inputGenerate()}</FormWrapper>
        </Container >
    )
}

export default InputForm