import React from 'react'
import * as S from './style'
import { Text, Button } from '../../Atom'

const Board = ({ title, date, content, listBtn }) => {
    return (
        <S.Container>
            <S.TitleWrapepr><Text {...title} /></S.TitleWrapepr>
            <S.DateWrapper><Text {...date} /></S.DateWrapper>
            <S.Divider />
            <S.ContentWrapper>
                <Text {...content} />
            </S.ContentWrapper>
            <S.ButtonWrapper>
                <Button {...listBtn} />
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default Board