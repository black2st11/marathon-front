import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'

const Comment = ({ title, content }) => {
    return (
        <S.Container>
            <S.TitleWrapper>
                <Text {...title} />
            </S.TitleWrapper>
            <S.ContentWrapper>
                <Text {...content} />
            </S.ContentWrapper>
        </S.Container>
    )
}

export default Comment

