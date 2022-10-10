// 폰트 사이즈(default 기준으로 제공이 되어짐)
const defaultFontSize = 1

const fontSize = {
    xs : `${defaultFontSize * 0.75}rem`,
    sm: `${defaultFontSize * 0.875}rem`,
    base : `${defaultFontSize * 1}rem`,
    lg : `${defaultFontSize * 1.125}rem`,
    xl : `${defaultFontSize * 1.25}rem`,
    xl2 : `${defaultFontSize * 1.5}rem`,
    xl3 : `${defaultFontSize * 1.875}rem`,
    xl4 : `${defaultFontSize * 2.25}rem`,
    xl5 : `${defaultFontSize * 3}rem`,
    xl6 : `${defaultFontSize * 3.75}rem`,
    xl7 : `${defaultFontSize * 4.5}rem`,
    xl8 : `${defaultFontSize * 6}rem`,
    xl9 : `${defaultFontSize * 8}rem`
}

// 기본 베이스 width, height(default 기준으로 계산 되어짐) -> 폰트 변경되어지면 여기도 변경 필요
const defaultSize = {
    width : '',
    height : ''
}

// 컬러 수정
const colorPalette = {
    primary : '',
    secondary : '',
    tertiary : '',
    black : '',
    white : '',
    defaultBorder : '',
    label : '',
}


// 디스플레이 사이즈
const viewSize = {
    mobile : '',
    tablet : '',
    desktop : '',
}

// nav 및 라우팅 포인트
const menuList = {
    info : ['intro', 'prize', 'recog', 'gift', 'road'],
    course : ['course'],
    participate : ['person', 'group', 'person_select', 'group_select'],
    record : ['record_select', 'record_board'],
    ground : ['volunteer', 'volunteer_select', 'promo', 'refund', 'free', 'pic', 'notify']
} 

// 등록
const TOKEN = ''
const API = ''
