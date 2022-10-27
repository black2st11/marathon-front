import React from 'react'
import { Text } from '../../Atom'
import * as S from './style'


const ImgText = ({ img, text }) => {
    return (
        <S.Container>
            <S.Img {...img} />
            <S.TextWrapper>
                <Text {...text} />
            </S.TextWrapper>
        </S.Container>
    )
}

export default ImgText