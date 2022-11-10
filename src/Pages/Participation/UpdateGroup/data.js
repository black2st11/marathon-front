import {
    inputTextProps, inputEnglishTextProps, formButtonProps, inputButtonProps,
    groupThProps, feeTableProps, tabletFeeTableProps, thProps, tdProps, ulsContentProps, warnText
} from '../../common'
import { fontSize, fontWeight, colorPalette } from '../../../config'
import { onlyLetter, onlyNumber } from '../../../util/validator'

export const firstProps = {
    inputs: [
        {
            type: 'input',
            category: 'long',
            name: 'name',
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
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            category: 'long',
            name: 'representative',
            text: {
                ...inputTextProps,
                children: '대표자 이름'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of the representative'
            },
            sep: true,
            input: {
                name: 'representative',
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
                children: '대표 연락처'
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
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
        }
    }
}

export const secondProps = {
    info: [
        [
            { title: { children: '단체명' }, content: { children: '홍길동' }, key: 'name' },
            { title: { children: '대표자 생년월일' }, content: { children: '1970년 1월 1일' }, key: 'birth' }
        ],
        [
            { title: { children: '대표자성명' }, content: { children: '홍길동' }, key: "representative" },
            { title: { children: '휴대전화' }, content: { children: '010-0000-0000' }, key: 'phone' }
        ],
        [
            { title: { children: '입금자명' }, content: { children: '홍길동' }, key: 'depositor' },
            { title: { children: '이메일' }, content: { children: 'mangosoftdev@naver.com' }, key: 'email' }
        ],
        [
            { title: { children: '주소' }, content: { children: '전라남도 여수시 덕충 3길 3 (덕충동) 2층 망고소프트' }, key: 'address' },
            { title: { children: '총인원수' }, content: { children: '15명' }, key: 'count' }
        ],
    ],
    cardcontent: {
        uls: [
            {
                listStyle: 'circle',
                items: [
                    { content: { ...ulsContentProps, children: '대리입금시 신청자와 입금자 명은 동일해야 접수확인이 가능합니다.', } },
                    { content: { ...ulsContentProps, children: '종목 변경시는 대회사무국으로 연락주시기 바랍니다.' } },
                    { content: { ...ulsContentProps, children: '참가비 입금이 되어야 접수가 완료되며 대리 입금시 입금자명은 단체명과 동일해야 합니다.' } },
                ]
            },
        ]
    },
    fee: feeTableProps,
    tabletFee: tabletFeeTableProps,
    groups: {
        ths: [
            { ...thProps, children: '번호' },
            { ...thProps, children: '성명' },
            { ...thProps, children: '성별' },
            { ...thProps, children: '생년월일' },
            { ...thProps, children: '휴대폰번호' },
            { ...thProps, children: '종목' },
            { ...thProps, children: '기념품 옵션' },
        ],
        trs: [
            [
                { ...tdProps, children: '1' },
                { ...tdProps, children: '홍길동' },
                { ...tdProps, children: '남' },
                { ...tdProps, children: '1998-02-08' },
                { ...tdProps, children: '010-0000-0000' },
                { ...tdProps, children: '하프남자부' },
                { ...tdProps, children: '90' },
            ],
            [
                { ...tdProps, children: '1' },
                { ...tdProps, children: '홍길동' },
                { ...tdProps, children: '남' },
                { ...tdProps, children: '1998-02-08' },
                { ...tdProps, children: '010-0000-0000' },
                { ...tdProps, children: '하프남자부' },
                { ...tdProps, children: '90' },
            ],
        ],
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
    },
    button: {
        text: {
            ...formButtonProps,
            children: '다음단계'
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



const groupProps = {
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
    trs: [{
        check: false,
        name: '',
        gender: '',
        birth: '',
        phone1: '',
        phone2: '',
        phone3: '',
        course: '',
        gift: '',
    }],
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

export const thirdProps = {
    inputs: [
        {
            type: 'input',
            category: 'long',
            name: 'group_name',
            text: {
                ...inputTextProps,
                children: '단체명'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Group name'
            },
            input: {
                name: 'group_name'
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            category: 'long',
            name: 'representative_name',
            text: {
                ...inputTextProps,
                children: '대표자 이름'
            },
            englishText: {
                ...inputEnglishTextProps,
                children: 'Name of the representative'
            },
            sep: true,
            input: {
                name: 'representative_name',
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'select',
            category: 'long',
            name: 'birth',
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
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'post_number',
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
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'address',
            input: {
                name: 'address'
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'detail_address',
            input: {
                name: 'detail_address'
            },
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'email',
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
            }],
            warnText: {
                ...warnText
            }
        },
        {
            type: 'input',
            name: 'depositor',
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
            },
            warnText: {
                ...warnText
            }
        },
    ],
    group: groupProps,
    button: {
        text: {
            ...formButtonProps,
            children: '신청완료'
        }
    }
}


export const invalidProps = {
    name: '',
    representative: '',
    phone: '',
    birth: '',
    gender: '',
    post_number: '',
    address: '',
    detail_address: '',
    email: '',
    depositor: '',
    course: '',
    gift: ''
}