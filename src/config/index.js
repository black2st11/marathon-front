// 폰트 사이즈(default 기준으로 제공이 되어짐)
export const defaultFontSize = 1

export const fontSize = {
    xs: `${defaultFontSize * 0.75}rem`,
    sm: `${defaultFontSize * 0.875}rem`,
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
    buttonHeight: `${buttonSize.height}rem`,
    minButtonWidth: `${buttonSize.width * 0.56}rem`,
    minButtonHeight: `${buttonSize.height * 0.82}rem`,
    inputHeight: `${inputSize.height}rem`
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
    placeholder: '#8b8b8b'
}


// 디스플레이 사이즈
export const viewSize = {
    mobile: '375px',
    tablet: '992px',
    desktop: '1920px',
}

// nav 및 라우팅 포인트
export const menuList = {
    info: ['intro', 'prize', 'recog', 'gift', 'road'],
    course: ['course'],
    participate: ['person', 'group', 'person_select', 'group_select'],
    record: ['record_select', 'record_board'],
    ground: ['volunteer', 'volunteer_select', 'promo', 'refund', 'free', 'pic', 'notify']
}

// 등록
export const TOKEN = ''
export const API = ''
