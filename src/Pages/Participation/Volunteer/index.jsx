import React, { useState } from 'react'
import { firstProps, initialInfo, invalidProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'

const Volunteer = () => {
    const [info, setInfo] = useState(initialInfo)

    const [invalid, setInvalid] = useState(invalidProps)

    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        isValidate(info, invalidProps, setInvalid)
    }

    return (
        <PersonForm {...firstProps} />
    )
}


export default Volunteer