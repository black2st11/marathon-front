import React from 'react'
import { qualification, reception, health, fail, provide, onGoing, after, control, emergency, privacy } from './data'
import { CardSection } from '../../../Components/Template'

const Note = () => {
    return (
        <React.Fragment>
            <CardSection {...qualification} />
            <CardSection {...reception} />
            <CardSection {...health} />
            <CardSection {...fail} />
            <CardSection {...provide} />
            <CardSection {...onGoing} />
            <CardSection {...after} />
            <CardSection {...control} />
            <CardSection {...emergency} />
            <CardSection {...privacy} />
        </React.Fragment>
    )
}

export default Note