import React from 'react'
import { Text } from '../../Atom'
import { Container, LongContainer, NameWrapper, EnglishNameWrapper } from './style'
import { fontSize } from '../../../config'

const TextForm = ({ text, englishText, category = 'default' }) => {
    const wrapperGenerate = () => {
        if (text.children) {
            return (
                <>
                    <NameWrapper>
                        <Text {...text} />
                    </NameWrapper>
                    <EnglishNameWrapper>
                        <Text {...englishText} />
                    </EnglishNameWrapper>
                </>
            )
        }

        return (<></>)
    }

    const GenerateForm = () => {
        if (category == 'default') {
            return (
                <Container noneValue={text.children}>
                    {wrapperGenerate()}
                </Container>
            )
        } else if (category == 'long') {
            return (
                <LongContainer noneValue={text.children}>
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