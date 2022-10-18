import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'

const ContentTitle = ({ text, border }) => {
    return (
        <S.Container>
            <S.Border {...border} border={text.border} />
            <S.TitleWrapper {...text}>
                <Text {...text} />
            </S.TitleWrapper>
        </S.Container>
    )
}

export default ContentTitle