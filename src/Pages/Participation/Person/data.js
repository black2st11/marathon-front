import { inputTextProps, inputEnglishTextProps, formButtonProps, inputButtonProps } from '../../common'
export const firstProps = {
    inputs: [
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
            type: 'radio',
            text: {
                ...inputTextProps,
                children: '성별'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Gender'
            },
            name: 'gender',
            items: [{
                value: '남성',
                children: 'male'
            },
            {
                value: '여성',
                children: 'female'
            }],
        }
    ],
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
        }
    }
}

export const secondProps = {
    inputs: [
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '주소'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Address'
            },
            input: {
                name: 'post_number'
            },
            button: {
                isRounded: true,
                text: {
                    ...inputButtonProps,
                    children: '우편번호 찾기',
                }
            }
        },
        {
            type: 'input',
            input: {
                name: 'address'
            }
        },
        {
            type: 'input',
            input: {
                name: 'detail_address'
            }
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '이메일'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'E-mail'
            },
            input: {
                name: 'email'
            }
        },
        {
            type: 'input',
            text: {
                ...inputTextProps,
                children: '입금자명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of depositor'
            },
            input: {
                name: 'depositor'
            }
        },
        {
            type: 'radio',
            text: {
                ...inputTextProps,
                children: '참가종목'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Participating events'
            },
            name: 'course',
            items: [{
                value: '풀코스',
                children: '풀코스 부문'
            },
            {
                value: '하프코스',
                children: '하프코스 부문'
            },
            {
                value: '10km코스',
                children: '10km코스 부문'
            }]
        },
        {
            type: 'select',
            text: {
                ...inputTextProps,
                children: '기념품 옵션'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Option'
            },
            selects: [{
                name: 'gift',
                placeholder: '기념품 선택',
            }]
        }
    ],
    button: {
        text: {
            ...formButtonProps,
            children: '신청완료'
        }
    }
}