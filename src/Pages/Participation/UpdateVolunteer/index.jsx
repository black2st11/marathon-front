import React, { useState } from 'react'
import * as S from './style'
import { firstProps, initialInfo, invalidProps, secondProps, thirdProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { CardContent, SelectTable } from '../../../Components/Organism'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
import { Button } from '../../../Components/Atom'
import { getListVolunteer } from '../../../api'

const UpdateVolunteer = () => {
    const [info, setInfo] = useState(initialInfo)
    const [invalid, setInvalid] = useState(invalidProps)
    const [section, setSection] = useState(0)

    const firstInfo = {
        name: info.name,
        phone1: info.phone1,
        phone2: info.phone2,
        phone3: info.phone3
    }

    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = async () => {
        if (isValidate(firstInfo, invalidProps, setInvalid)) {
            let res = await getListVolunteer({ name: info.name, phone: `${info.phone1}${info.phone2}${info.phone3}` })
            secondProps.items.map(items => {
                items.map(item => {
                    if (item.key == 'class_name') {
                        item.content.children = `${res.data[0]['grade']}학년${res.data[0][item.key]}반`
                    } else {
                        item.content.children = res.data[0][item.key]
                    }
                })
            })
            setInfo({
                ...info,
                ...res.data[0]
            })
            setSection(1)
        }
    }

    secondProps.button.onClick = () => {
        setSection(2)
    }

    thirdProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    thirdProps.button.onClick = () => {
        if (isValidate(info, invalidProps, setInvalid)) {
            setSection(0)
        }
    }


    return (
        <React.Fragment>
            {section == 0 && (
                <S.FirstSection>
                    <S.CardContentWrapper>
                        <CardContent {...firstProps.cardContent} />
                    </S.CardContentWrapper>
                    <PersonForm {...firstProps} />
                </S.FirstSection>
            )}
            {section == 1 && (
                <S.SecondSection>
                    <S.TableWrapper>
                        <SelectTable {...secondProps} />
                    </S.TableWrapper>
                    <S.CardContentWrapper>
                        <CardContent {...secondProps.cardContent} />
                    </S.CardContentWrapper>
                    <S.ButtonWrapper>
                        <Button {...secondProps.button} />
                    </S.ButtonWrapper>
                </S.SecondSection>
            )}
            {section == 2 && (
                <S.ThirdSection>
                    <PersonForm {...thirdProps} />
                </S.ThirdSection>
            )}
        </React.Fragment>
    )
}

export default UpdateVolunteer