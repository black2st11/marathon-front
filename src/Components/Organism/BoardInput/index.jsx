import React from 'react'
import * as S from './style'
import { Text, Input, Te, TextArea } from '../../Atom'


const BoardInput = ({ text, input, textarea }) => {
    return (
        <S.Container>
            <S.TitleWrapper>
                <Text {...text} />
            </S.TitleWrapper>
            <S.InputWrapper>
                {input && (<Input {...input} />)}
                {textarea && (<TextArea {...textarea} />)}
            </S.InputWrapper>
        </S.Container>
    )
}

export default BoardInput