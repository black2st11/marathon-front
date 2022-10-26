import React from 'react'
import { BoardInput } from '../../Organism'
import * as S from './style'
import { Text, Button, FileInput } from '../../Atom'

const BoradForm = ({ inputs = [], description, listBtn, writeBtn, fileInput }) => {
    return (
        <S.Container>
            {inputs.map(input => (
                <S.InputFormWrapper>
                    <BoardInput {...input} />
                </S.InputFormWrapper>
            ))}
            <S.DescriptionWrapper>
                <Text {...description} />
            </S.DescriptionWrapper>
            <S.FileWrapper>
                <Text {...fileInput.text} />
                <FileInput {...fileInput.file} />
            </S.FileWrapper>
            <S.ButtonWrapper>
                <Button {...listBtn} />
                <Button {...writeBtn} />
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default BoradForm