import { onlyLetter, onlyNumber } from '../../../util/validator'
import { inputTextProps, formButtonProps, inputEnglishTextProps, warnText } from '../../common'

export const firstProps = {
    inputs: [
        {
            type: 'radio',
            name: 'participated',
            text: {
                ...inputTextProps,
                children: '봉사날짜'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Date'
            },
            name: 'participated',
            items: [{
                value: '2022-12-19',
                children: '12월 19일 (토요일)'
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'name',
            text: {
                ...inputTextProps,
                children: '이름'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name'
            },
            input: {
                name: 'name',
                pattern: onlyLetter
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'select',
            name: 'birth',
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
                options: [{ value: '1995', name: '1995' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
            },
            {
                name: 'month',
                placeholder: '월 (Month)',
                options: [{ value: '05', name: '05' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
            },
            {
                name: 'day',
                placeholder: '월 (Day)',
                options: [{ value: '16', name: '16' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'phone',
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
                pattern: onlyNumber
            },
            {
                name: 'phone2',
                pattern: onlyNumber
            },
            {
                name: 'phone3',
                pattern: onlyNumber
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'school',
            text: {
                ...inputTextProps,
                children: '학교명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of school'
            },
            input: {
                name: 'school'
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'depart',
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
                pattern: onlyNumber,
                sep: {
                    children: '학년',
                }
            },
            {
                name: 'class',
                pattern: onlyNumber,
                sep: {
                    children: '반',
                }
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'volunteer_id',
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
            },
            warnText: {
                ...warnText
            }
        },
    ],
    button: {
        text: {
            ...formButtonProps,
            children: '신청하기'
        }
    }
}


export const initialInfo = {
    participated: '',
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    year: '',
    month: '',
    day: '',
    school: '',
    grade: '',
    class: '',
    volunteer_id: ''
}

export const invalidProps = {
    participated: '',
    name: '',
    phone: '',
    birth: '',
    school: '',
    depart: '',
    volunteer_id: ''
}