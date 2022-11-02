import React, { useState } from 'react'
import { PersonForm } from '../../../Components/Template'
import { firstProps, secondProps, invalidProps } from './data'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
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

    const [invalid, setInvalid] = useState(invalidProps)

    firstProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })
    firstProps.button.onClick = () => {
        let result = isValidate(info, invalidProps, setInvalid)
        if (result) {
            console.log(1)
        }
    }

    secondProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })
    console.log(invalid)

    return (
        <React.Fragment>
            <PersonForm {...firstProps} />
            <PersonForm {...secondProps} />
        </React.Fragment>
    )
}

export default Person