import React from 'react'
import * as S from './style'


const Image = ({ src, border, borderRadius }) => {
    const imageProps = {
        src,
        border,
        borderRadius
    }

    return (
        <S.Image {...imageProps} />
    )
}

export default Image