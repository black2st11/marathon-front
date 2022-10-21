import React from 'react'
import { CardSection } from '../../../Components/Template'
import { prizeInfo, coursePrize } from './data'

const Award = () => {
    return (
        <React.Fragment>
            <CardSection {...coursePrize} />
            <CardSection {...prizeInfo} />
        </React.Fragment>
    )
}

export default Award