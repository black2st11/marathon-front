import React from 'react'
import { Ul } from '../../Atom'
import { Container } from './style'
const CardContent = ({ uls = [] }) => {
    return (
        <Container>
            {uls.map((ul, index, array) => (
                <Ul key={index} items={ul.items} listStyle={ul.listStyle} />
            ))}
        </Container>
    )
}

export default CardContent