import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'
import { MultipleText } from '../Table'

const WhiteCard = ({ items = [] }) => {
    return (
        <S.Container>
            {items.map(item => (
                <S.RowWrapper>
                    <S.Title>
                        <Text {...item.title} />
                    </S.Title>
                    <S.Contents>
                        <MultipleText texts={item.contents} />
                    </S.Contents>
                </S.RowWrapper>
            ))}
        </S.Container>
    )
}

export default WhiteCard