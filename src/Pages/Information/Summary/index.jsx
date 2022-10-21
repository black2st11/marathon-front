import React from 'react'
import { summary, way, fee, refundPolicy, schedule } from './data'
import { CardSection } from '../../../Components/Template'

const Summary = () => {
    return (
        <React.Fragment>
            <CardSection {...summary} />
            <CardSection {...way} />
            <CardSection {...fee} />
            <CardSection {...refundPolicy} />
            <CardSection {...schedule} />
        </React.Fragment>
    )
}

export default Summary