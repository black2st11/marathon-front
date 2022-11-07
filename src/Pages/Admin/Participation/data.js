export const checkBoxProps = {
    fields: {
        title: {
            children: '항목(아무것도 선택안한 경우 전체)'
        },
        items: [
            { checkBox: { name: 'fields' }, text: { children: '이름' } },
            { checkBox: { name: 'fields' }, text: { children: '종목' } },
            { checkBox: { name: 'fields' }, text: { children: '생년월일' } },
            { checkBox: { name: 'fields' }, text: { children: '성별' } },
            { checkBox: { name: 'fields' }, text: { children: '연락처' } },
            { checkBox: { name: 'fields' }, text: { children: '단체명' } },
            { checkBox: { name: 'fields' }, text: { children: '우편번호' } },
            { checkBox: { name: 'fields' }, text: { children: '주소' } },
            { checkBox: { name: 'fields' }, text: { children: '상세주소' } },
            { checkBox: { name: 'fields' }, text: { children: '입금자명' } },
            { checkBox: { name: 'fields' }, text: { children: '기념품' } },
            { checkBox: { name: 'fields' }, text: { children: '입금여부' } },
            { checkBox: { name: 'fields' }, text: { children: '신청서종류' } },
        ]
    },
    order: {
        title: {
            children: '정렬(선택안한 경우 입력 순)'
        },
        items: [
            { checkBox: { name: 'order' }, text: { children: '성별(1순위) + 이름(2순위)' } },
            { checkBox: { name: 'order' }, text: { children: '종목(1순위) + 성별(2순위) + 이름(3순위)' } },
            { checkBox: { name: 'order' }, text: { children: '종목(1순위) + 단체(2순위) + 성별(3순위)' } },
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
    category: {
        title: {
            children: '신청서 구분'
        },
        items: [
            { checkBox: { name: 'order' }, text: { children: '단체' } },
            { checkBox: { name: 'order' }, text: { children: '개인' } },
            { checkBox: { name: 'order' }, text: { children: '전체' } },
        ]
    },
    availableList: ['fields', 'order', 'deposit', 'category'],
    button: {
        text: {
            children: '엑셀 출력'
        }
    }
}

export const selectProps = {

}

export const tableProps = {
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
        { children: '입금버튼' },
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
            { button: { text: { children: '입금/미입금 처리', color: 'white' } } },
            { button: { text: { children: '삭제 처리', color: 'white' } } }
        ]
    ]
}