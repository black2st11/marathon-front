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
    const [section, setSection] = useState(0)

    const firstInfo = {
        name: info.name,
        phone1: info.phone1,
        phone2: info.phone2,
        phone3: info.phone3,
        year: info.year,
        month: info.month,
        day: info.day,
        gender: info.gender
    }

    firstProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        if (isValidate(firstInfo, invalidProps, setInvalid)) {
            setSection(1)
        }
    }

    secondProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    secondProps.button.onClick = () => {
        if (isValidate(info, invalidProps, setInvalid)) {
        }
    }
    return (
        <React.Fragment>
            {section == 0 && (
                <PersonForm {...firstProps} />
            )}
            {section == 1 && (
                <PersonForm {...secondProps} />
            )}
        </React.Fragment>
    )
}

export default Person