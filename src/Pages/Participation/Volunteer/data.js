import { inputTextProps, formButtonProps, inputEnglishTextProps } from '../../common'

export const firstProps = {
    inputs: [
        {
            type: 'radio',
            text: {
                ...inputTextProps,
                children: '봉사날짜'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Date'
            },
            name: 'date',
            items: [{
                value: '12월19일',
                children: '12월 19일 (토요일)'
            }],
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '이름'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name'
            },
            input: {
                name: 'name'
            }
        },
        {
            type: 'select',
            text: {
                ...inputTextProps,
                children: '생년월일'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Date of Birth'
            },
            selects: [{
                name: 'year',
                placeholder: '년도 (Year)',
            },
            {
                name: 'month',
                placeholder: '월 (Month)',
                options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
            },
            {
                name: 'day',
                placeholder: '월 (Day)',
                options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
            }]
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '연락처'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Contact'
            },
            sep: true,
            inputs: [{
                name: 'phone1',
            },
            {
                name: 'phone2',
            },
            {
                name: 'phone3',
            }]
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '학교명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of school'
            },
            input: {
                name: 'name'
            }
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '학년반'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Grade and class'
            },
            sep: true,
            inputs: [{
                name: 'grade',
                sep: {
                    children: '학년'
                }
            },
            {
                name: 'class',
                sep: {
                    children: '반'
                }
            },
            ]
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '1365 ID'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: ''
            },
            input: {
                name: 'volunteer_id'
            }
        },
    ],
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
        }
    }
}