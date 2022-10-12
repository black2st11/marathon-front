import React from 'react'

import { Container, Span, P, H1, H2, H3 } from './style'


const TextGenerate = ({ children, fontSize, color, type }) => {
    switch (type) {
        case 'h1':
            return (<H1 fontSize={fontSize} color={color}>{children}</H1>)
        case 'h2':
            return (<H2 fontSize={fontSize} color={color}>{children}</H2>)
        case 'h3':
            return (<H3 fontSize={fontSize} color={color}>{children}</H3>)
        case 'p':
            return (<P fontSize={fontSize} color={color}>{children}</P>)
        default:
            return (<Span fontSize={fontSize} color={color}>{children}</Span>)
    }
}


const Text = ({ children, fontSize, color, type = 'span' }) => {
    return (
        <TextGenerate children={children} fontSize={fontSize} color={color} type={type} />
    )
}

export default Text