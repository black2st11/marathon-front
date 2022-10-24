import React from 'react'
import { Button, Ul } from '../../Atom'
import { RadioForm, SelectForm, InputForm } from '../../Organism'
import * as S from './style'

const InputGenerator = ({ input }) => {
    switch (input.type) {
        case 'input':
            return (<InputForm {...input} />)
        case 'radio':
            return (<RadioForm {...input} />)
        case 'select':
            return (<SelectForm {...input} />)
    }
}


const PersonForm = ({ terms, uls, inputs, button }) => {
    return (
        <S.Container>
            {terms && (
                <S.TermsWrapper>

                </S.TermsWrapper>
            )}
            {uls && (
                <S.UlWrapper>
                    <Ul uls />
                </S.UlWrapper>
            )}
            {inputs.map((input, index, array) => (
                <S.InputWrapper key={index}>
                    <InputGenerator input={input} />
                </S.InputWrapper>
            ))}
            {button && (
                <S.ButtonWrapper>
                    <Button {...button} />
                </S.ButtonWrapper>
            )}
        </S.Container>
    )
}

export default PersonForm