import React from 'react'
import * as S from './style'

const Modal = ({ onClose, oneDayClose, img, isClose = false }) => {
    if (isClose) {
        return
    }
    return (
        <S.Container>
            <S.Modal>
                <S.TopWrapper>X</S.TopWrapper>
                <S.ModalImg {...img} />
                <S.BottomWrapper>오늘 하루동안 보지않기</S.BottomWrapper>
            </S.Modal>
        </S.Container>
    )
}

export default Modal