import React from 'react'
import { CardSection } from '../../../Components/Template'
import { allocate, allocateDescription } from './data'
import { Map } from '../../../Components/Atom'
import * as S from './style'
import { TitleList } from '../../../Components/Organism'

const Direction = () => {
    return (
        <S.Container>
            <S.MapWrapper>
                <Map />
            </S.MapWrapper>
            <S.CardSectionWrapper>
                <CardSection {...allocate} />
            </S.CardSectionWrapper>
            <S.TitleWrapper>
                {allocateDescription.map(description => (
                    <TitleList {...description} />
                ))}
            </S.TitleWrapper>

        </S.Container>

    )
}

export default Direction