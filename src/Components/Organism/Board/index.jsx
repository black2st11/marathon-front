import React from 'react'
import * as S from './style'
import { Text, Button } from '../../Atom'
import { Comment } from '../../Organism'
const Board = ({ title, date, content, listBtn, comment }) => {
    return (
        <S.Container>
            <S.TitleWrapepr><Text {...title} /></S.TitleWrapepr>
            <S.DateWrapper><Text {...date} /></S.DateWrapper>
            <S.Divider />
            <S.ContentWrapper>
                <Text {...content} />
            </S.ContentWrapper>
            <Comment {...comment} />
            <S.ButtonWrapper>
                <Button {...listBtn} />
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default Board