import React, { useState } from 'react'
import { searchProps, updateProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { setForm } from '../../../util'

const UpdatePerson = () => {
    const [info, setInfo] = useState({
        name: '',
        phone1: '',
        phone2: '',
        phone3: '',
        year: '',
        month: '',
        day: '',
        gender: '',
        post_number: '',
        address: '',
        detail_address: '',
        email: '',
        depositor: '',
        course: '',
        gift: ''
    })

    updateProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
    })

    return (
        <React.Fragment>
            <PersonForm {...searchProps} />
            <PersonForm {...updateProps} />
        </React.Fragment>

    )
}

export default UpdatePerson