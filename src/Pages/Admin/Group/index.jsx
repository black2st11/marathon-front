import React from 'react'
import * as S from './style'
import { checkBoxProps, searchProps, selectProps, tableProps } from './data'
import { CheckBox, Input, Select, Text, Button } from '../../../Components/Atom'
import { GroupTable } from '../../../Components/Organism/GroupForm'
import { Pagination } from '../../../Components/Organism'

const AdminGroup = () => {
    return (
        <S.Container>
            <S.CheckBoxWrapper>
                {checkBoxProps.availableList.map(key => (
                    <S.RowWraper>
                        <S.CheckTitle>
                            <Text {...checkBoxProps[key].title} />
                        </S.CheckTitle>
                        {checkBoxProps[key].items.map(item => (
                            <S.CheckBoxContent>
                                <CheckBox {...item.checkBox} />
                                <Text {...item.text} />
                            </S.CheckBoxContent>
                        ))}
                    </S.RowWraper>
                ))}
            </S.CheckBoxWrapper>
            <S.ButtonWrapper>
                <Button {...checkBoxProps.button} />
            </S.ButtonWrapper>
            <S.SearchWrapper>
                <Input />
                <Button {...searchProps.button} />
            </S.SearchWrapper>
            <S.ActionWrapper>
                <Select {...selectProps.select} />
                <Button {...selectProps.button} />
            </S.ActionWrapper>
            <S.TableWrapper>
                <GroupTable {...tableProps} />
            </S.TableWrapper>
            <S.PaginationWrapper>
                <Pagination />
            </S.PaginationWrapper>
        </S.Container>
    )
}

export default AdminGroup