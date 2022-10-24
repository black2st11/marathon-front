import React, { useState } from 'react'
import { PersonForm } from '../../../Components/Template'
import { firstProps, secondProps } from './data'
import { setForm } from '../../../util'
const Person = () => {
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

    firstProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
    })

    secondProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
    })
    console.log(info)
    return (
        <React.Fragment>
            <PersonForm {...firstProps} />
            <PersonForm {...secondProps} />
        </React.Fragment>
    )
}

export default Person