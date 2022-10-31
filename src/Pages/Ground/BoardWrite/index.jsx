import React from 'react'
import { BoardForm } from '../../../Components/Template'
import { firstProps } from './data'

const BoardWrite = () => {
    return (
        <BoardForm {...firstProps} />
    )
}

export default BoardWrite