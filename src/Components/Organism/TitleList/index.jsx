import React from "react";
import { Text, Ul } from "../../Atom";
import * as S from './style'

const TitleList = ({ title, ul, borderRadius, padding, bgColor }) => {
    const titleProps = {
        borderRadius,
        padding,
        bgColor
    }

    return (
        <S.Container>
            <S.TitleWrapper {...titleProps}>
                <Text {...title} />
            </S.TitleWrapper>
            <Ul {...ul} />
        </S.Container>
    )
}

export default TitleList