import React from 'react'
import * as S from './style'
import { CardContent, ContentTitle, Table } from '../../Organism'
import { Image } from '../../Atom'

const CardSection = ({ title, subTitle, uls, table, image }) => {
    return (
        <S.Container>
            {title && (
                <S.TitleWrapper>
                    <ContentTitle {...title} />
                </S.TitleWrapper>
            )}
            {subTitle && (
                <S.SubTitleWrapper>
                    <ContentTitle {...subTitle} />
                </S.SubTitleWrapper>
            )}
            <S.CardWrapper>
                {uls && (
                    <CardContent uls={uls} />
                )}
                {table && (
                    <Table {...table} />
                )}
                {image && (
                    <Image {...image} />
                )}
            </S.CardWrapper>
        </S.Container>
    )
}

export default CardSection