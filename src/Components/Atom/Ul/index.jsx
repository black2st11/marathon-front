import React from 'react'
import { Container, CircleLi, TitleLi, Title, NoneLi } from './style'
import { Text } from '../index'

const Ul = ({ items = [], listStyle = 'circle' }) => {
    return (
        <Container>
            {items.map((item, index, array) => {
                if (listStyle === 'title') return (
                    <TitleLi key={index}>
                        <Title type={item.title.type}>
                            <Text {...item.title}>{item.title.name}</Text>
                        </Title>
                        <Text {...item.content}>{item.content.name}</Text>
                    </TitleLi>
                )
                else if (listStyle === 'none') {
                    return (<NoneLi key={index}><Text {...item.content}>{item.content.name}</Text></NoneLi>)
                }
                else return (<CircleLi key={index}><Text {...item.content}>{item.content.name}</Text></CircleLi>)
            })}
        </Container>
    )
}

export default Ul