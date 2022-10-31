import React from 'react'
import { normalBoardsProps, refundBoardsProps, buttonProps, paginationProps } from './data'
import { Boards as BoardsTemplate } from '../../../Components/Template'
import { Pagination } from '../../../Components/Organism'
import * as S from './style'
import { Button } from '../../../Components/Atom'

const Boards = () => {
    return (
        <S.Container>
            <S.BoardsWrapper>
                <BoardsTemplate {...refundBoardsProps} />
            </S.BoardsWrapper>
            <S.ButtonnWrapper>
                <Button {...buttonProps} />
            </S.ButtonnWrapper>
            <S.PagintaionWrapper>
                <Pagination {...paginationProps} />
            </S.PagintaionWrapper>
        </S.Container>
    )
}

export default Boards