import React from 'react'
import * as S from './style'
import { Input, Button, Text, Icon, Select, CheckBox } from '../../Atom'

const Tds = ({ tds = [] }) => {
    return tds.map((td, index, array) => {
        if (td.button) {
            return (
                <S.Td><S.ButtonWrapper><Button {...td.button} /></S.ButtonWrapper></S.Td>
            )
        } else if (td.inputs) {
            return (
                <S.Td>
                    <S.MultiWrapper>
                        <S.MultiItem>
                            <Input {...td.inputs[0]} />
                        </S.MultiItem>
                        <S.MultiItem>
                            <Input {...td.inputs[1]} />
                        </S.MultiItem>
                        <S.MultiItem>
                            <Input {...td.inputs[2]} />
                        </S.MultiItem>
                    </S.MultiWrapper>
                </S.Td>
            )
        } else if (td.check) {
            return (
                <S.Td>
                    <S.CheckBoxWrapper>
                        <CheckBox {...td.check} />
                    </S.CheckBoxWrapper>
                </S.Td>
            )
        } else if (td.select) {
            return (
                <S.Td>
                    <Select {...td.select} />
                </S.Td>
            )
        } else {
            return (<S.Td><Input {...td.input}></Input></S.Td>)
        }
    })
}


const GroupForm = ({ ths, trs }) => {
    return (
        <S.Container>
            <S.Table>
                <S.THead>
                    <S.Tr>
                        {ths.map((th, index, array) => (
                            <S.Th key={index}>{th.category === 'check' ? (
                                <S.CheckBoxWrapper><CheckBox {...th} /></S.CheckBoxWrapper>
                            ) : (<Text {...th}></Text>)}</S.Th>
                        ))}
                    </S.Tr>
                </S.THead>
                <S.TBody>
                    {trs.map((tds, index, array) => (
                        <S.Tr key={index}>
                            <Tds tds={tds} />
                        </S.Tr>
                    ))}
                </S.TBody>
            </S.Table>
        </S.Container>
    )
}

export default GroupForm