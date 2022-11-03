import React, { useState } from 'react'
import { firstProps, invalidProps, secondProps, thirdProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { CardContent, SelectTable } from '../../../Components/Organism'
import { GroupTable } from '../../../Components/Organism/GroupForm'
import * as S from './style'
import { Button } from '../../../Components/Atom'
import { setForm, setGroupForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
const UpdateGroup = () => {
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
    const [invalid, setInvalid] = useState(invalidProps)
    let firstInfo = {
        group_name: info.group_name,
        representative_name: info.representative_name,
        phone1: info.phone1,
        phone2: info.phone2,
        phone3: info.phone3
    }
    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        let result = isValidate(firstInfo, invalidProps, setInvalid)
        if (result) {
            console.log(1)
        }
    }

    thirdProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    thirdProps.group.trs = setGroupForm(group, setGroup)

    return (
        <React.Fragment>
            <S.FirstSection>
                <PersonForm {...firstProps} />
            </S.FirstSection>
            <S.SecondSection>
                <S.TableWrapper>
                    <SelectTable items={secondProps.info} />
                </S.TableWrapper>
                <S.CardContentWrapper>
                    <CardContent {...secondProps.cardcontent} />
                </S.CardContentWrapper>
                <S.TableWrapper>
                    <SelectTable {...secondProps.fee} />
                    <SelectTable {...secondProps.tabletFee} />
                </S.TableWrapper>
                <S.GroupWrapper>
                    <GroupTable {...secondProps.groups} />
                </S.GroupWrapper>
                <S.ButtonWrapper>
                    <Button {...secondProps.button} />
                </S.ButtonWrapper>
            </S.SecondSection>
            <S.ThirdSection>
                <PersonForm {...thirdProps} />
            </S.ThirdSection>
        </React.Fragment>
    )
}

export default UpdateGroup