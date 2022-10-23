import { colorPalette, fontSize, fontWeight } from '../../../config'
import { allocateImg } from '../../../config/images'
import { cardTitleProps } from '../../common'

export const allocate = {
    title: {
        text: { children: '행사장 배치 계획', ...cardTitleProps }
    },
    image: {
        src: allocateImg,
        alt: '배치 계획',
    }
}

const allocateDescriptionText = {
    title: {
        fontSize: {
            desktop: fontSize.lg,
        },
        fontWeight: fontWeight.medium,
        color: colorPalette.white,
    },
    ul: {
        fontSize: {
            desktop: fontSize.lg,
        },
        fontWeight: fontWeight.normal,
        color: colorPalette.base
    }

}


export const allocateDescription = [{
    title: {
        ...allocateDescriptionText.title,
        children: '주차장',
    },
    ul: {
        items: [{ content: { ...allocateDescriptionText.ul, children: '진주역 주차장 사용' } }]
    }
},
{
    title: {
        ...allocateDescriptionText.title,
        children: '행사장',
    },
    ul: {
        items: [{ content: { ...allocateDescriptionText.ul, children: '4차선 도로 통제(경찰 승인) 후 무대 설치' } }]
    }
},
{
    title: {
        ...allocateDescriptionText.title,
        children: '집결지',
    },
    ul: {
        items: [{ content: { ...allocateDescriptionText.ul, children: '도로 옆 진주시 축제 임시 주차장' } }]
    }
},
{
    title: {
        ...allocateDescriptionText.title,
        children: '출발~자전거 도로 구간 통제',
    },
    ul: {
        items: [
            { content: { ...allocateDescriptionText.ul, children: '관봉방면 2차로는 마라톤 주로로 사용' } },
            { content: { ...allocateDescriptionText.ul, children: '진주 시내 방면 2차로는 라파콘으로 양분한 후, 차량 교행' } }
        ]
    }
}]