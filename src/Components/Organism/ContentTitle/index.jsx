import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'

const ContentTitle = ({ text, border }) => {
    return (
        <S.Container>
            <S.Border border={border ? true : false} />
            <S.TitleWrapper border={border}>
                <Text {...text} />
            </S.TitleWrapper>
        </S.Container>
    )
}

export default ContentTitle