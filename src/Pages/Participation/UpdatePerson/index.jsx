import React, { useState } from 'react'
import * as S from './style'
import { firstProps, secondProps, thirdProps, invalidProps } from './data'
import { CardContent, SelectTable } from '../../../Components/Organism'
import { PersonForm } from '../../../Components/Template'
import { setForm, setWarnText } from '../../../util'
import { Button } from '../../../Components/Atom'
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
    firstProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    thirdProps.inputs.forEach(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

    firstProps.button.onClick = () => {
        isValidate(firstInfo, invalidProps, setInvalid)
    }

    thirdProps.button.onClick = () => {
        isValidate(info, invalidProps, setInvalid)
    }

    return (
        <React.Fragment>
            <S.FirstSection>
                <S.CardContentWrapper>
                    <CardContent {...firstProps.cardContent} />
                </S.CardContentWrapper>
                <PersonForm {...firstProps} />
            </S.FirstSection>
            <S.SecondSection>
                <S.TableWrapper>
                    <SelectTable items={secondProps.info} />
                </S.TableWrapper>
                <S.CardContentWrapper>
                    <CardContent {...secondProps.cardContent} />
                </S.CardContentWrapper>
                <S.TableWrapper>
                    <SelectTable {...secondProps.fee} />
                    <SelectTable {...secondProps.tabletFee} />
                </S.TableWrapper>
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

export default UpdatePerson