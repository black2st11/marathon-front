import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'


const RowGenerate = ({ items = [] }) => {
    if (items.length == 1) {
        return items.map(item => (
            <S.ItemWrapper>
                <S.SolidHead><Text {...item.title} /></S.SolidHead>
                {item.content && (
                    <S.SolidContent><Text {...item.content} /></S.SolidContent>
                )}
                {item.contents && (
                    <S.MultipleContent>{item.contents.map(content => (
                        <Text {...content} />
                    ))}</S.MultipleContent>
                )}
            </S.ItemWrapper>
        ))
    }

    return items.map(item => (
        <S.ItemsWrapper>
            <S.Head><Text {...item.title} /></S.Head>
            <S.Content><Text {...item.content} /></S.Content>
        </S.ItemsWrapper>
    ))
}

// items 는 2차 배열 [ [], [] ]
const SelectTable = ({ items = [], display = { desktop: 'flex', tablet: 'flex', mobile: 'flex' } }) => {
    console.log(items)
    return (
        <S.Container display={display}>
            {items.map(item => (
                <S.Row>
                    <RowGenerate items={item} />
                </S.Row>
            ))}
        </S.Container>
    )
}

export default SelectTable