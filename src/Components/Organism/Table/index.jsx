import React from 'react'
import { Container, Thead, Tbody, Th, Td, Tr } from './style'
import { Text, Ul } from '../../Atom'

const MultipleText = ({ texts = [] }) => {
    return texts.map((text, index, array) => (
        <React.Fragment key={index}>
            <Text {...text} />
            <br />
        </React.Fragment>
    ))
}

const GenerateTd = ({ tds = [] }) => {
    return tds.map((td, index, array) => (
        <Td key={index} rowSpan={td.rowSpan ? td.rowSpan : '1'} colSpan={td.colSpan ? td.colSpan : '1'}>
            {td.names ? (
                <MultipleText texts={td.names} />
            ) : (
                <Text {...td} />
            )}
        </Td >
    ))
}

const GenerateTh = ({ ths = [] }) => {
    return ths.map((th, index, array) => (
        <Th key={index} rowSpan={th.rowSpan ? th.rowSpan : '1'} colSpan={th.colSpan ? th.colSpan : '1'}>
            <Text {...th} />
        </Th>
    ))
}

const GenerateTr = ({ trs = [] }) => {
    return trs.map((tr, index, array) => (
        <Tr key={index}>
            <GenerateTd tds={tr} />
        </Tr>
    ))
}

const Table = ({ ths = [], trs = [], descriptions = [] }) => {
    return (
        <React.Fragment>
            <Container>
                <Thead>
                    <Tr>
                        <GenerateTh ths={ths} />
                    </Tr>
                </Thead>
                <Tbody>
                    <GenerateTr trs={trs} />
                </Tbody>
            </Container>
            <Ul listStyle='circle' items={descriptions} />
        </React.Fragment>
    )
}

export default Table