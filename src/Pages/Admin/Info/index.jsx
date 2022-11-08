import React from 'react'
import { InputForm } from '../../../Components/Organism'
import { infoProps } from './data'
import { Button } from '../../../Components/Atom'
import * as S from './style'

const AdminInfo = () => {
    return (
        <S.Container>
            {infoProps.availableList.map(key => (
                <S.RowWrapper>
                    <InputForm {...infoProps[key]} />
                </S.RowWrapper>
            ))}
            <S.ButtonWrapper>
                <Button {...infoProps.button} />
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default AdminInfo