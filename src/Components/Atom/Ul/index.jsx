import React from 'react'
import { Container, CircleLi, TitleLi, Title } from './style'


const Ul = ({ items = [], listStyle = 'circle' }) => {
    return (
        <Container>
            {items.map((item, index, array) => {
                if (listStyle == 'title') return (<TitleLi><Title>{item.title}</Title><div>{item.content}</div></TitleLi>)
                else return (<CircleLi key={index}>{item.content}</CircleLi>)
            })}
        </Container>
    )
}

export default Ul