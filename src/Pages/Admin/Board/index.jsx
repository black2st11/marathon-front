import React from 'react'
import { Button, Input, Select } from '../../../Components/Atom'
import { Pagination } from '../../../Components/Organism'
import { Boards } from '../../../Components/Template'
import { boardProps } from './data'
import * as S from './style'

const AdminBoard = () => {
    return (
        <S.Container>
            <S.SelectWrapper>
                <Select {...boardProps.select} />
                <Button {...boardProps.button} />
            </S.SelectWrapper>
            <S.SearchWrapper>
                <Input />
                <Button {...boardProps.search.button} />
            </S.SearchWrapper>
            <Boards {...boardProps.items} />
            <S.PaginationWrapper>
                <Pagination />
            </S.PaginationWrapper>
        </S.Container>
    )
}

export default AdminBoard