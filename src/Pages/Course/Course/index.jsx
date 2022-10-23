import React from 'react'
import { imageProps, limitTime } from './data'
import * as S from './style'
import { CardSection } from '../../../Components/Template'
import { Image } from '../../../Components/Atom'


const Course = () => {
    return (
        <S.Container>
            <S.ImgWrapper>
                <Image {...imageProps} />
            </S.ImgWrapper>
            <S.CardWrapper>
                <CardSection {...limitTime} />
            </S.CardWrapper>
        </S.Container>
    )
}

export default Course