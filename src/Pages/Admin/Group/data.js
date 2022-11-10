import { colorPalette } from "../../../config"

export const checkBoxProps = {
    fields: {
        title: {
            children: '항목(아무것도 선택안한 경우 전체)'
        },
        items: [
            { checkBox: { name: 'fields' }, text: { children: '단체명' } },
            { checkBox: { name: 'fields' }, text: { children: '대표자' } },
            { checkBox: { name: 'fields' }, text: { children: '연락처' } },
            { checkBox: { name: 'fields' }, text: { children: '우편번호' } },
            { checkBox: { name: 'fields' }, text: { children: '주소' } },
            { checkBox: { name: 'fields' }, text: { children: '상세주소' } },
            { checkBox: { name: 'fields' }, text: { children: '입금여부' } },
            { checkBox: { name: 'fields' }, text: { children: '신청일' } },
        ]
    },
    order: {
        title: {
            children: '정렬(선택안한 경우 입력 순)'
        },
        items: [
            { checkBox: { name: 'order' }, text: { children: '단체명' } },
            { checkBox: { name: 'order' }, text: { children: '대표자' } },
            { checkBox: { name: 'order' }, text: { children: '주소' } },
            { checkBox: { name: 'order' }, text: { children: '입력순' } },
        ]
    },
    deposit: {
        title: {
            children: '입금 구분'
        },
        items: [
            { checkBox: { name: 'order' }, text: { children: '입금' } },
            { checkBox: { name: 'order' }, text: { children: '미입금' } },
            { checkBox: { name: 'order' }, text: { children: '전체' } },
        ]
    },
    availableList: ['fields', 'order', 'deposit'],
    button: {
        text: {
            children: '엑셀 출력',
            color: colorPalette.white
        }
    }
}

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
            { value: 'delete', name: '임시 삭제' },
            { value: 'set_deposit', name: '입금 처리' },
            { value: 'unset_deposit', name: '미입금 처리' },
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
        { children: '단체명' },
        { children: '대표자' },
        { children: '연락처' },
        { children: '우편번호' },
        { children: '주소' },
        { children: '상세주소' },
        { children: '입금여부' },
        { children: '생성일' },
        { children: '입금버튼' },
        { children: '삭제버튼' },
    ],
    trs: [
        [
            { children: '1' },
            { children: '문정훈의 단체' },
            { children: '문정훈' },
            { children: '01086147257' },
            { children: '129381' },
            { children: '주소' },
            { children: '상세주소' },
            { children: '1/2' },
            { children: '2022-11-03' },
            { button: { text: { children: '입금/미입금 처리', color: 'white' } } },
            { button: { text: { children: '삭제 처리', color: 'white' } } }
        ]
    ]
}