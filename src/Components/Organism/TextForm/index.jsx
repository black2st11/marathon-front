import React from 'react'
import { Text } from '../../Atom'
import { Container, LongContainer, NameWrapper, EnglishNameWrapper } from './style'
import { fontSize } from '../../../config'

const TextForm = ({ text, englishText, category = 'default' }) => {
    const wrapperGenerate = () => {
        if (text.name) {
            return (
                <>
                    <NameWrapper>
                        <Text {...text}>{text.name}</Text>
                    </NameWrapper>
                    <EnglishNameWrapper>
                        <Text {...englishText}>{englishText.name}</Text>
                    </EnglishNameWrapper>
                </>
            )
        }

        return (<></>)
    }

    const GenerateForm = () => {
        if (category == 'default') {
            return (
                <Container noneValue={text.name}>
                    {wrapperGenerate()}
                </Container>
            )
        } else if (category == 'long') {
            return (
                <LongContainer noneValue={text.name}>
                    {wrapperGenerate()}
                </LongContainer>
            )
        }
    }

    return (
        <GenerateForm />
    )
}

export default TextForm