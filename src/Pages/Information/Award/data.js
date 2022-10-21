import { tdProps, thProps, cardTitleProps } from '../../common'

export const coursePrize = {
    title: {
        text: { children: '종목별 시상안내', ...cardTitleProps }
    },
    table: {
        ths: [{ ...thProps, children: '종목' }, { ...thProps, children: '부별' }, { ...thProps, children: '시상내역' }],
        trs: [
            [
                { ...tdProps, children: '하프코스 부문' },
                { ...tdProps, children: '남자/여자' },
                { ...tdProps, children: '1-3위: 상장, 트로피  /  4-10위: 부상' },
            ],
            [
                { ...tdProps, children: '10km코스 부문' },
                { ...tdProps, children: '남자/여자' },
                { ...tdProps, children: '1-3위: 상장, 트로피  /  4-10위: 부상' },
            ],
            [
                { ...tdProps, children: '5km코스 부문' },
                { ...tdProps, children: '남자/여자' },
                { ...tdProps, children: '1-3위: 상장, 트로피  /  4-10위: 부상' },
            ],
            [
                { ...tdProps, children: '단체참가상' },
                { ...tdProps, children: '단체' },
                { ...tdProps, children: '상금' },
            ],
        ],
    }
}

export const prizeInfo = {
    title: {
        text: { children: '시상금 안내', ...cardTitleProps }
    },
    table: {
        ths: [
            { ...thProps, children: '종목' },
            { ...thProps, children: '순위' },
            { ...thProps, children: '시상' },
            { ...thProps, children: '비고' }
        ],
        trs: [
            [
                { ...tdProps, children: '하프코스 부문', rowSpan: '4' },
                { ...tdProps, children: '1위' },
                { ...tdProps, children: '20만원, 상장, 트로피' },
                { ...tdProps, children: `1-3위 현장 시상\n상금은 계좌이체`, rowSpan: '4' },
            ],
            [
                { ...tdProps, children: '2위' },
                { ...tdProps, children: '15만원, 상장, 트로피' },
            ],
            [
                { ...tdProps, children: '3위' },
                { ...tdProps, children: '10만원, 상장, 트로피' },
            ],
            [
                { ...tdProps, children: '4-10위' },
                { ...tdProps, children: '부상' },
            ],
            [
                { ...tdProps, children: '10km코스 부문', rowSpan: '4' },
                { ...tdProps, children: '1위' },
                { ...tdProps, children: '15만원, 상장, 트로피' },
                { ...tdProps, children: `1-3위 현장 시상\n상금은 계좌이체`, rowSpan: '4' },
            ],
            [
                { ...tdProps, children: '2위' },
                { ...tdProps, children: '10만원, 상장, 트로피' },
            ],
            [
                { ...tdProps, children: '3위' },
                { ...tdProps, children: '7만원, 상장, 트로피' },
            ],
            [
                { ...tdProps, children: '4-10위' },
                { ...tdProps, children: '부상' },
            ],
            [
                { ...tdProps, children: '5km코스 부문', rowSpan: '4' },
                { ...tdProps, children: '1위' },
                { ...tdProps, children: '10만원, 상장' },
                { ...tdProps, children: `1-3위 현장 시상\n상금은 계좌이체`, rowSpan: '4' },
            ],
            [
                { ...tdProps, children: '2위' },
                { ...tdProps, children: '7만원, 상장' },
            ],
            [
                { ...tdProps, children: '3위' },
                { ...tdProps, children: '5만원' },
            ],
            [
                { ...tdProps, children: '4-10위' },
                { ...tdProps, children: '부상' },
            ],
            [
                { ...tdProps, children: '단체참가상', rowSpan: '4' },
                { ...tdProps, children: '50명 이상' },
                { ...tdProps, children: '25만원' },
                { ...tdProps, children: `5km 참가자 제외`, rowSpan: '4' },
            ],
            [
                { ...tdProps, children: '40명 이상' },
                { ...tdProps, children: '20만원' },
            ],
            [
                { ...tdProps, children: '30명 이상' },
                { ...tdProps, children: '15만원' },
            ],
            [
                { ...tdProps, children: '20명 이상' },
                { ...tdProps, children: '10만원' },
            ],
        ],
        descriptions: [{ content: { children: '부상은 당일 현장 수령에 한해 제공됩니다.(대회일 이후 별도 발송 없음)' } }]
    }
}
