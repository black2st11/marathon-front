import React from 'react'
import { firstProps, secondProps, thirdProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { SelectTable } from '../../../Components/Organism'


const UpdateGroup = () => {
    return (
        <React.Fragment>
            <PersonForm {...firstProps} />
            <SelectTable items={secondProps.info} />
        </React.Fragment>
    )
}

export default UpdateGroup