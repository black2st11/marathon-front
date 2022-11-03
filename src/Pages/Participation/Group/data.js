import { inputTextProps, inputEnglishTextProps, formButtonProps, inputButtonProps, groupThProps } from '../../common'
import { fontSize, fontWeight, colorPalette } from '../../../config'
export const firstProps = {
    inputs: [
        {
            type: 'input',
            category: 'long',
            text: {
                ...inputTextProps,
                children: '단체명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Group name'
            },
            input: {
                name: 'name'
            }
        },
        {
            type: 'input',
            category: 'long',
            text: {
                ...inputTextProps,
                children: '대표자 이름'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of the representative'
            },
            sep: true,
            input: [{
                name: 'reprensetative_name',
            }]
        },
        {
            type: 'select',
            category: 'long',
            text: {
                ...inputTextProps,
                children: '대표자 생년월일'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Representative\'s date of Birth'
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
                children: '대표 연락처'
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
    ],
    button: {
        text: {
            ...formButtonProps,
            children: '신청완료'
        }
    }
}


export const groupNameProps = {
    input: { value: '', borderRadius: '0.25rem', border: 'none', onChange: () => console.log(1), height: '40px' }
}

export const checkProps = {
    check: { onChange: () => console.log(1), borderRadius: '0.3rem' }
}

export const genderProps = {
    select: { options: [{ value: '남성', name: '남성' }, { value: '여성', name: '여성' }], height: '40px', borderRadius: '5px', border: 'none' },

}

export const birthProps = {
    input: { value: '', borderRadius: '0.25rem', border: 'none', onChange: () => console.log(1), height: '40px' }

}

export const courseProps = {
    select: { options: [{ value: '10km', name: '10km' }, { value: '5km', name: '5km' }, { value: '하프', name: '하프코스' }], height: '40px', borderRadius: '5px', border: 'none' },
}

export const contactProps = {
    inputs: [
        { value: '', onChange: () => console.log(1), height: '40px' },
        { value: '', onChange: () => console.log(1), height: '40px' },
        { value: '', onChange: () => console.log(1), height: '40px' }
    ]
}

export const giftProps = {
    select: { options: [{ value: '10km', name: '10km' }, { value: '5km', name: '5km' }, { value: '하프', name: '하프코스' }], height: '40px', borderRadius: '5px', border: 'none' },
}

export const trsProps = {
    check: false,
    name: '',
    gender: '',
    birth: '',
    phone1: '',
    phone2: '',
    phone3: '',
    course: '',
    gift: '',
}

const btnTxtProps = {
    fontSize: {
        desktop: fontSize.lg,
    },
    color: colorPalette.primary,
    fontWeight: fontWeight.medium
}

const btnProps = {
    bgColor: colorPalette.white,
    border: `1px solid ${colorPalette.primary}`,
    isRounded: true,
    padding: `0.5rem 1.5rem`
}

export const groupProps = {
    ths: [
        { category: 'check', onClick: () => console.log('check'), borderRadius: '0.3rem' },
        { ...groupThProps, children: '성명' },
        { ...groupThProps, children: '성별' },
        { ...groupThProps, children: '생년월일' },
        { ...groupThProps, children: '휴대폰번호' },
        { ...groupThProps, children: '종목' },
        { ...groupThProps, children: '기념품 옵션' },
        { ...groupThProps, children: '삭제' },
    ],
    trs: [],
    checkBtn: {
        ...btnProps,
        text: {
            ...btnTxtProps,
            children: '전체선택'
        },

    },
    deleteBtn: {
        ...btnProps,
        text: {
            ...btnTxtProps,
            children: '선택삭제'
        }
    },
    addBtn: {
        ...btnProps,
        text: {
            ...btnTxtProps,
            children: '인원추가'
        }
    },
    currentText: {
        normal: {
            fontSize: {
                desktop: fontSize.lg,
            },
            fontWeight: fontWeight.normal,
            color: colorPalette.base,
        },
        strong: {
            fontSize: {
                desktop: fontSize.xl2
            },
            fontWeight: fontWeight.semiBold,
            color: colorPalette
        },
        preFix: '참가인원 : ',
        postFix: '명'
    }
}