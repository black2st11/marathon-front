import React from 'react'
import * as S from './style'
import { checkBoxProps, tableProps } from './data'
import { CheckBox, Text } from '../../../Components/Atom'
import { GroupTable } from '../../../Components/Organism/GroupForm'
import { Pagination } from '../../../Components/Organism'

const AdminParticipation = () => {
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
            <S.TableWrapper>
                <GroupTable {...tableProps} />
            </S.TableWrapper>
            <S.PaginationWrapper>
                <Pagination />
            </S.PaginationWrapper>
        </S.Container>
    )
}

export default AdminParticipation