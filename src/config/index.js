// 폰트 사이즈(default 기준으로 제공이 되어짐)
export const defaultFontSize = 1

export const fontSize = {
    xs: `${defaultFontSize * 0.75}rem`,
    sm: `${defaultFontSize * 0.875}rem`,
    sm2: `${defaultFontSize * 0.938}rem`,
    base: `${defaultFontSize * 1}rem`,
    lg: `${defaultFontSize * 1.125}rem`,
    xl: `${defaultFontSize * 1.25}rem`,
    xl2: `${defaultFontSize * 1.5}rem`,
    xl3: `${defaultFontSize * 1.875}rem`,
    xl4: `${defaultFontSize * 2.25}rem`,
    xl5: `${defaultFontSize * 3}rem`,
    xl6: `${defaultFontSize * 3.75}rem`,
    xl7: `${defaultFontSize * 4.5}rem`,
    xl8: `${defaultFontSize * 6}rem`,
    xl9: `${defaultFontSize * 8}rem`
}

export const fontWeight = {
    base: 400,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
}

// 기본 베이스 width, height(default 기준으로 계산 되어짐) -> 폰트 변경되어지면 여기도 변경 필요
const buttonSize = {
    width: 16,
    height: 3.5
}

const inputSize = {
    width: '100%',
    height: 3.5
}

export const defaultSize = {
    width: '',
    height: '2rem',
    margin: '0.25rem 0',
    buttonWidth: `${buttonSize.width}rem`,
    buttonHeight: `3.25rem`,
    minButtonWidth: `${buttonSize.width * 0.56}rem`,
    minButtonHeight: `2.5rem`,
    inputHeight: `3.25rem`,
    desktopContainer: '1194px',
    tabletContainer: '942px',
    mobileContainer: '336px',
    nav: {
        desktop: '85px',
        tablet: '70px',
        mobile: '70px'
    },
    li: {
        desktop: {
            titleHeight: '2rem',
            titleWidth: '7.75rem',
            titleLongWidth: '9.375rem',
        }
    },
    table: {
        desktop: {
            height: '4.25rem',
            width: 18.875
        }
    }
}

// 컬러 수정
export const colorPalette = {
    primary: '#414c80',
    secondary: '',
    tertiary: '',
    black: '#313131',
    white: 'white',
    defaultBorder: '',
    label: '',
    warn: '',
    gray: '#e9e9e9',
    border: '#9b9b9b',
    noneBorder: '#707070',
    placeholder: '#8b8b8b',
    card: '#e6f4ff',
    base: '#464646',
    thead: '#d9d9d9',
    thText: '#101010'
}


// 디스플레이 사이즈
export const viewSize = {
    mobile: '375px',
    tablet: '992px',
    desktop: '1920px',
}

// nav 및 라우팅 포인트
export const menuList = [
    {
        href: 'info',
        name: '대회안내',
        menu: [
            { name: '대회 요강', href: 'info' },
            { name: '시상 안내', href: 'prize' },
            { name: '유의 사항', href: 'recog' },
            { name: '참가 기념품', href: 'gift' },
            { name: '오시는 길', href: 'road' }
        ]
    },
    {
        href: 'courses',
        name: '대회 코스',
        menu: [
            { name: '대회 코스', href: '' },
        ]
    },
    {
        href: 'participations',
        name: '참가신청',
        menu: [
            { name: '개인 참가신청', href: 'person' },
            { name: '단체 참가신청', href: 'group' },
            { name: '개인 참가신청 조회/수정', href: 'person-select' },
            { name: '단체 참가신청 조회/수정', href: 'group-select' },
        ]
    },
    {
        href: 'record',
        name: '대회기록',
        menu: [
            { name: '기록 조회', href: 'record-select' },
            { name: '기록 업로드', href: 'record-upload' },
        ]
    },
    {
        href: 'ground',
        name: '참여마당',
        menu: [
            { name: '자원봉사 신청', href: 'volunteer' },
            { name: '자원봉사 신청 조회/수정', href: 'volunteer_select' },
            { name: '홍보 게시판', href: 'promotion' },
            { name: '환불 게시판', href: 'refund' },
            { name: '자유 게시판', href: 'free' },
            { name: '대회 사진', href: 'pic' },
            { name: '공지 사항', href: 'notify' },
        ]
    },
]

// 등록
export const TOKEN = ''
export const API = ''
