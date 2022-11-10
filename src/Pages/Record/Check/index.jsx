import React, { useState } from 'react'
import { CardContent, SelectTable } from '../../../Components/Organism'
import { PersonForm } from '../../../Components/Template'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
import { firstProps, initialInfo, invalidProps, secondProps } from './data'

const Check = () => {
    const [info, setInfo] = useState(initialInfo)
    const [invalid, setInvalid] = useState(invalidProps)
    const [section, setSection] = useState(0)

    const firstInfo = {
        name: info.name,
        bib: info.bib,
        gender: info.gender,
        course: info.course
    }

    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        if (isValidate(firstInfo, invalidProps, setInvalid)) {
            setSection(1)
        }
    }

    return (
        <React.Fragment>
            {section == 0 && (
                <PersonForm {...firstProps} />
            )}
            {section == 1 && (
                <React.Fragment>
                    <SelectTable items={secondProps.info} />
                    <CardContent {...secondProps.cardContent} />
                </React.Fragment>

            )}
        </React.Fragment>
    )
}

export default Check