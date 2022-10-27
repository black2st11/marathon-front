import { colorPalette } from "../../config";
import { participateLogoImg, recogLogoImg, infoLogoImg, recordLogoImg, notifyLogoImg, cbsImg, gyeongSangImg, jinjuImg, courseImg } from '../../config/images'
export const firstProps = {
    title: {
        type: 'h2',
        children: `2022 대한민국 마라톤 송년\n남부내륙철도 조기착공 기원 전국마라톤대회`
    },
    content: {
        type: 'p',
        children: `2022년 12월 31일(토) 13:30\n경남 진주시 진주역`
    },
    button: {
        text: {
            children: '신청하기'
        },
        isRounded: true,
        border: `2px solid ${colorPalette.black}`,
        bgColor: 'transparent'
    },
    date: {
        title: { children: '행사 시작까지' },
        day: { children: 'DAY' },
        dayValue: { children: '14' },
        hour: { children: 'HOUR' },
        hourValue: { children: '8' },
        minute: { children: 'MINUTES' },
        minuteValue: { children: '25' },
        second: { children: 'SECONDS' },
        secondValue: { children: '32' }
    }
}

export const secondProps = {
    info: {
        title: {
            children: '마라톤 알아보기'
        },
        content: {
            children: `마라톤에 도움이 되는 바로가기\n정보를 안내합니다.`
        },
        links: [
            { img: { src: participateLogoImg }, text: { children: '참가신청' } },
            { img: { src: recogLogoImg }, text: { children: '접수확인' } },
            { img: { src: infoLogoImg }, text: { children: '대회요강' } },
            { img: { src: recordLogoImg }, text: { children: '대회기록' } },
            { img: { src: notifyLogoImg }, text: { children: '공지사항' } },
        ]
    },
    supports: [
        { title: { children: '주최' }, imgs: [{ src: cbsImg }] },
        { title: { children: '후원' }, imgs: [{ src: gyeongSangImg }, { src: jinjuImg }] },
    ]
}

export const thirdProps = {
    title: {
        bgColor: colorPalette.white,
        height: '5px',
        text: { children: '대회요강', type: 'p', color: colorPalette.white },
        description: { children: '반드시 참가 유의사항을 읽고 신청해주세요.', color: colorPalette.white }
    },
    first: [
        { title: { children: '대회명' }, contents: [{ children: `2022 대한민국 마라톤 송년\n남부내륙철도 조기착공 기원 전국마라톤대회` }] },
        {
            title: { children: '대회일시' },
            contents: [{ children: `2022년 12월 31일(토) 개회식: 13:00/출발: 13:30` }],
            contents: [{ children: `13:30 하프코스 출발\n13:40 10km코스 출발\n13:50 5km코스 출발\n` }],
        },
        { title: { children: '집결시간' }, contents: [{ children: `해당코스 출발 30분 전 집결완료` }] },
        { title: { children: '장소' }, contents: [{ children: `진주역` }] },
        {
            title: { children: '참가구분' },
            contents: [
                { children: `하프/10km/5km` },
                { children: `3가지 코스 중 선택 가능` },
            ]
        },
    ],
    second: [
        {
            title: { children: '참가자격' },
            contents: [
                { children: `내외국인 누구나 나이제한 없으며, 신체 건강한 남녀 누구나` },
                {
                    children: `대한육상경기연맹 등록선수 및 선수등록 말소 후\n2년 경과되지 않은 자는 시상에서 제외됩니다.`
                },
            ]
        },
        {
            title: { children: '접수기간' },
            contents: [{ children: `2022년 12월 19일 (월) 18:00까지` }],
        },
        { title: { children: '제공품' }, contents: [{ children: `기념품, 배번호, 기록칩(하프, 10km), 안내책자, 그 외 필요한 물품` }] },
        { title: { children: '시상' }, contents: [{ children: `하프코스 남녀 1위 / 2위 / 3위\n10km코스 남녀 각 1위 / 2위 / 3위\n5km코스 남녀 1위 / 2위 / 3위` }] },
        {
            title: { children: '코스' },
            contents: [
                { children: `진주역 ~ 문산읍 갈곡마을 (자전거도로이용)` },
            ]
        },
    ]
}

export const fourthProps = {
    title: {
        bgColor: colorPalette.primary,
        height: '5px',
        text: { children: '대회요강', type: 'p', color: colorPalette.black },
        description: { children: '반드시 참가 유의사항을 읽고 신청해주세요.', color: colorPalette.placeholder }
    },
    course: {
        src: courseImg,
        alt: '코스',
        borderRadius: '1.375rem',
    }
}
