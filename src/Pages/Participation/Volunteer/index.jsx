import React from 'react'
import { firstProps } from './data'
import { PersonForm } from '../../../Components/Template'

const Volunteer = () => {
    return (
        <PersonForm {...firstProps} />
    )
}


export default Volunteer