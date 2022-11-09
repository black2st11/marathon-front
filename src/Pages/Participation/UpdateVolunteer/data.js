import { onlyLetter, onlyNumber } from "../../../util/validator"
import { inputTextProps, inputEnglishTextProps, formButtonProps, warnText, ulsContentProps } from "../../common"

export const firstProps = {
    inputs: [
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
    ],
    cardContent: {
        uls: [
            {
                listStyle: 'none',
                items: [
                    { content: { ...ulsContentProps, children: '정보조회를 위해 아래의 정보를 입력해 주세요.', } },
                ]
            },
        ]
    },
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
        }
    }
}

export const secondProps = {
    items: [
        [
            { title: { children: '이름' }, content: { children: '홍길동' }, key: 'name' },
            { title: { children: '봉사날짜' }, content: { children: '1월 15일' }, key: 'participated' }
        ],
        [
            { title: { children: '생년월일' }, content: { children: '2002년 2월 20일' }, key: 'birth' },
            { title: { children: '휴대전화' }, content: { children: '010-0000-0000' }, key: 'phone' }
        ],
        [
            { title: { children: '학교명' }, content: { children: '망고 고등학교' }, key: 'school_name' },
            { title: { children: '학년반' }, content: { children: '2학년 3반' }, key: 'class_name' }
        ],
        [
            { title: { children: '1365 ID' }, content: { children: 'MANGO01' } }
        ],
    ],
    cardContent: {
        uls: [
            {
                listStyle: 'circle',
                items: [
                    { content: { ...ulsContentProps, children: '자원봉사자는 사전에 전자메일이나 문자로 송달받은 임무 내역을 숙지하고 행사 전일 예비소집 때 반드시 참석해야 합니다.', } },
                    { content: { ...ulsContentProps, children: '행사 시작과 종료시 인원체크가 되어야 하며 그렇지 않을 경우 자원봉사 인정을 하지 않습니다. (당일 봉사시간 8시간)' } },
                    { content: { ...ulsContentProps, children: '관리자의 지시를 잘 이행해야 하며 그렇지 않을 경우 봉사 활동을 정지 시키고 귀가 조치할 수 있습니다.' } },
                    { content: { ...ulsContentProps, children: '기타 사항은 마라톤참가자 일반 유의사항과 같습니다.' } },
                ]
            },
        ]
    },
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
        }
    }
}

export const thirdProps = {
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
            items: [{
                value: '12월19일',
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
            name: 'school_name',
            text: {
                ...inputTextProps,
                children: '학교명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of school'
            },
            input: {
                name: 'school_name',
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'class_name',
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
                    children: '학년'
                }
            },
            {
                name: 'class_name',
                pattern: onlyNumber,
                sep: {
                    children: '반'
                }
            },
            ],
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
            children: '수정하기'
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
    school_name: '',
    grade: '',
    class_name: '',
    volunteer_id: ''
}

export const invalidProps = {
    participated: '',
    name: '',
    phone: '',
    birth: '',
    school_name: '',
    class_name: '',
    grade: '',
    volunteer_id: ''
}