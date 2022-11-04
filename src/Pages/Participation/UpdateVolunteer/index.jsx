import React, { useState } from 'react'
import * as S from './style'
import { firstProps, initialInfo, invalidProps, secondProps, thirdProps } from './data'
import { PersonForm } from '../../../Components/Template'
import { CardContent, SelectTable } from '../../../Components/Organism'
import { setForm, setWarnText } from '../../../util'
import { isValidate } from '../../../util/validator'
import { Button } from '../../../Components/Atom'

const UpdateVolunteer = () => {
    const [info, setInfo] = useState(initialInfo)
    const [invalid, setInvalid] = useState(invalidProps)

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

    firstProps.button.onClick = () => {
        isValidate(firstInfo, invalidProps, setInvalid)
    }

    thirdProps.inputs.map(input => {
        setForm(input, info, setInfo)
        setWarnText(input, invalid)
    })

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
                    <SelectTable {...secondProps} />
                </S.TableWrapper>
                <S.CardContentWrapper>
                    <CardContent {...secondProps.cardContent} />
                </S.CardContentWrapper>
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

export default UpdateVolunteer