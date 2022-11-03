import React, { useState } from 'react'
import { searchProps, updateProps, invalidProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'

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
    const [invalid, setInvalid] = useState(invalidProps)
    const firstInfo = {
        name: info.name,
        year: info.year,
        month: info.month,
        day: info.day
    }
    searchProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    updateProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    searchProps.button.onClick = () => {
        isValidate(firstInfo, invalidProps, setInvalid)
    }

    updateProps.button.onClick = () => {
        isValidate(info, invalidProps, setInvalid)
    }

    return (
        <React.Fragment>
            <PersonForm {...searchProps} />
            <PersonForm {...updateProps} />
        </React.Fragment>

    )
}

export default UpdatePerson