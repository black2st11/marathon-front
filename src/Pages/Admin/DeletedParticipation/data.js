import { colorPalette } from "../../../config"

export const searchProps = {
    button: {
        isRounded: true,
        text: {
            children: '검색',
            color: colorPalette.white,
        }
    }
}

export const selectProps = {
    select: {
        options: [
            { value: 'delete', name: '영구 삭제' },
            { value: 'set_deposit', name: '복구' },
        ]
    },
    button: {
        isRounded: true,
        text: {
            children: '실행',
            color: colorPalette.white,
        }
    }
}

export const tableProps = {
    maxWidth: '1160px',
    ths: [
        { children: '번호' },
        { children: '이름' },
        { children: '구분' },
        { children: '단체이름' },
        { children: '배번' },
        { children: '입금자명' },
        { children: '생년월일' },
        { children: '종목' },
        { children: '성별' },
        { children: '연락처' },
        { children: '기념품' },
        { children: '신청일' },
        { children: '입금여부' },
        { children: '복구버튼' },
        { children: '삭제버튼' },
    ],
    trs: [
        [
            { children: '1' },
            { children: '문정훈' },
            { children: '단체' },
            { children: '문정훈의 단체' },
            { children: '101' },
            { children: '문정훈' },
            { children: '1995-05-16' },
            { children: '10km' },
            { children: '남성' },
            { children: '01086147257' },
            { children: '옷' },
            { children: '2022-11-03' },
            { children: '미입금' },
            { button: { text: { children: '복구', color: 'white' } } },
            { button: { text: { children: '영구 삭제', color: 'white' } } }
        ]
    ]
}