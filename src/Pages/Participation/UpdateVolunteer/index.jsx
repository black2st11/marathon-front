import React from 'react'
import { firstProps, secondProps, thirdProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { SelectTable } from '../../../Components/Organism'

const UpdateVolunteer = () => {
    return (
        <React.Fragment>
            <PersonForm {...firstProps} />
            <SelectTable {...secondProps} display={{ desktop: 'flex', tablet: 'flex', mobile: 'flex' }} />
            <PersonForm {...thirdProps} />
        </React.Fragment>
    )
}

export default UpdateVolunteer