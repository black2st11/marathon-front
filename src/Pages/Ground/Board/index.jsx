import React from 'react'
import { firstProps } from './data'
import { Board as BoardTemplate } from '../../../Components/Organism'

const Board = () => {
    return (
        <BoardTemplate {...firstProps} />
    )
}

export default Board