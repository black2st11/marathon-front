import { logo } from './images'

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
    xl3: `${defaultFontSize * 1.75}rem`,
    xl4: `${defaultFontSize * 1.875}rem`,
    xl5: `${defaultFontSize * 2.25}rem`,
    xl6: `${defaultFontSize * 2.5}rem`,
    xl7: `${defaultFontSize * 2.75}rem`,
    xl8: `${defaultFontSize * 3}rem`,
    xl9: `${defaultFontSize * 3.75} rem`,
    xl10: `${defaultFontSize * 4.5} rem`,
    xl11: `${defaultFontSize * 6} rem`,
    xl12: `${defaultFontSize * 8} rem`
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
    buttonWidth: `${buttonSize.width} rem`,
    buttonHeight: `3.25rem`,
    minButtonWidth: `${buttonSize.width * 0.56} rem`,
    minButtonHeight: `2.5rem`,
    inputHeight: `3.25rem`,
    desktopContainer: '1194px',
    tabletContainer: '942px',
    mobileContainer: '336px',
    whiteCard: {
        desktop: '582px'
    },
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
    secondary: '#003389',
    tertiary: '#25a3d2',
    lightBlack: "#303030",
    black: '#313131',
    white: 'white',
    realBlack: 'black',
    defaultBorder: '',
    label: '',
    invalid: '#ff0000',
    warn: '#bf0000',
    gray: '#e9e9e9',
    border: '#9b9b9b',
    noneBorder: '#707070',
    placeholder: '#8b8b8b',
    card: '#e6f4ff',
    base: '#464646',
    thead: '#d9d9d9',
    thText: '#101010',
    accent: '#d54343',
    file: '#f2f2f2',
    divider: '#7b7b7b',
    boardBorder: '#d9d9d9',
    cardBorder: '#b2b2b2',
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

// 필수 정보 리스트
export const requiredInfo = {
    name: { required: true },
    depositor: { required: true },
    phone: { required: true },
    phone1: { required: true },
    phone2: { required: true },
    phone3: { required: true },
    post_number: { required: true },
    address: { required: true },
    detail_address: { required: true },
    representative: { required: true },
    gender: { required: true },
    email: { required: false },
    birth: { required: true },
    year: { required: true },
    month: { required: true },
    day: { required: true },
    course: { required: true },
    gift: { required: true },
    reprensetative_name: { required: true },
    group_name: { required: true },
    participated: { required: true },
    depart: { required: true },
    school: { required: true },
    volunteer_id: { required: false },
    bib: { required: false },
}


// 등록
export const TOKEN = ''
export const API = ''


export const defaultInfo = {
    mainTitle: '',
    date: '',
    bank: '',
    courseFee: '',
    accountHolder: '',
}

export const navProps = {
    logo: logo,
    links: [{ name: '대회안내' }, { name: '대회코스' }, { name: '참가신청' }, { name: '대회기록' }, { name: "참여마당" }],
    button: {
        content: '참가신청하기',
        onClick: () => console.log('snfma'),
        isRounded: true,
        color: colorPalette.white,
        fontWeight: fontWeight.medium,
        fontSize: {
            desktop: fontSize.lg,
        }
    },
    menus: [
        {
            title: '대회안내',
            menu: [
                { name: '대회 안내' },
                { name: '시상 안내' },
                { name: '유의 사항' },
                { name: '참가 기념품' },
                { name: '오시는 길' }
            ]
        },
        {
            title: '대회 코스',
            menu: [
                { name: '대회 코스' },
            ]
        },
        {
            title: '참가신청',
            menu: [
                { name: '개인 참가신청' },
                { name: '단체 참가신청' },
                { name: '개인 참가신청 조회/수정' },
                { name: '단체 참가신청 조회/수정' },
            ]
        },
        {
            title: '대회기록',
            menu: [
                { name: '기록 조회' },
                { name: '기록 업로드' },
            ]
        },
        {
            title: '참여마당',
            menu: [
                { name: '자원봉사 신청' },
                { name: '자원봉사 신청 조회/수정' },
                { name: '홍보 게시판' },
                { name: '환불 게시판' },
                { name: '자유 게시판' },
                { name: '대회 사진' },
                { name: '공지 사항' },
            ]
        },
    ]
}

const footerProps = {
    name: '화순',
    tel: '061-858-2456',
    fax: '061-858-2456'
}