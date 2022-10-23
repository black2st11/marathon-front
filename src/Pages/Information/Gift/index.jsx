import React from 'react'
import { imageProps, imageDescription } from './data'
import { Image, Ul } from '../../../Components/Atom'
import * as S from './style'


const Gift = () => {
    return (
        <S.Container>
            <S.ImageWrapper>
                <Image {...imageProps} />
            </S.ImageWrapper>
            <S.UlWrapper>
                <Ul {...imageDescription} />
            </S.UlWrapper>
        </S.Container>
    )
}

export default Gift