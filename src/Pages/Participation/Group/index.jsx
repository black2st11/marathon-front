import React, { useState } from 'react'
import { GroupForm } from '../../../Components/Organism'
import { PersonForm } from '../../../Components/Template'
import { setGroupForm, setAddGroup, setIndividualDelete, setGroupDelete, setAllCheck, setToggleCheck } from '../../../util'
import { firstProps, groupProps, trsProps, secondProps } from './data'


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
    groupProps.trs = setGroupForm(group, setGroup)
    groupProps.addBtn.onClick = () => setAddGroup(group, setGroup)
    groupProps.deleteBtn.onClick = () => setGroupDelete(group, setGroup)
    groupProps.checkBtn.onClick = () => setAllCheck(group, setGroup)
    groupProps.ths[0].onChange = () => setToggleCheck(group, setGroup, setIsAllCheck)
    groupProps.ths[0].value = isAllCheck
    secondProps.group = groupProps
    return (
        <React.Fragment>
            <PersonForm {...firstProps} />
            <PersonForm {...secondProps} />
        </React.Fragment>

    )
}

export default Group