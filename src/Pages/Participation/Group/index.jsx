import React, { useState } from 'react'
import { GroupForm } from '../../../Components/Organism'
import { PersonForm } from '../../../Components/Template'
import { setGroupForm, setAddGroup, setIndividualDelete, setGroupDelete, setAllCheck, setToggleCheck, setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
import { firstProps, groupProps, trsProps, secondProps, invalidProps } from './data'


const Group = () => {
    const [info, setInfo] = useState({
        group_name: '',
        representative_name: '',
        year: '',
        month: '',
        day: '',
        post_number: '',
        address: '',
        detail_address: '',
        email: '',
        phone1: '',
        phone2: '',
        phone3: '',
        depositor: '',
    })
    const [group, setGroup] = useState([{
        check: false,
        name: '',
        gender: '',
        birth: '',
        phone1: '',
        phone2: '',
        phone3: '',
        course: '',
        gift: '',
    }, {
        check: false,
        name: '',
        gender: '',
        birth: '',
        phone1: '',
        phone2: '',
        phone3: '',
        course: '',
        gift: '',
    }])
    const [isAllCheck, setIsAllCheck] = useState(false)
    const [invalid, setInvalid] = useState(invalidProps)
    const [section, setSection] = useState(0)

    let firstInfo = {
        group_name: info.group_name,
        representative_name: info.representative_name,
        year: info.year,
        month: info.month,
        day: info.day
    }

    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    secondProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        if (isValidate(firstInfo, invalidProps, setInvalid)) {
            setSection(1)
        }
    }

    secondProps.button.onClick = () => {
        if (isValidate(info, invalidProps, setInvalid)) {

        }
    }

    groupProps.trs = setGroupForm(group, setGroup)
    groupProps.addBtn.onClick = () => setAddGroup(group, setGroup)
    groupProps.deleteBtn.onClick = () => setGroupDelete(group, setGroup)
    groupProps.checkBtn.onClick = () => setAllCheck(group, setGroup)
    groupProps.ths[0].onChange = () => setToggleCheck(group, setGroup, setIsAllCheck)
    groupProps.ths[0].value = isAllCheck
    secondProps.group = groupProps
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

export default Group