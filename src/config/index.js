import {logo} from './images';

// 폰트 사이즈(default 기준으로 제공이 되어짐)
export const defaultFontSize = 1;

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
	xl12: `${defaultFontSize * 8} rem`,
};

export const fontWeight = {
	base: 400,
	normal: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
};

// 기본 베이스 width, height(default 기준으로 계산 되어짐) -> 폰트 변경되어지면 여기도 변경 필요
const buttonSize = {
	width: 16,
	height: 3.5,
};

const inputSize = {
	width: '100%',
	height: 3.5,
};

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
		desktop: '582px',
	},
	nav: {
		desktop: '85px',
		tablet: '70px',
		mobile: '70px',
	},
	li: {
		desktop: {
			titleHeight: '2rem',
			titleWidth: '7.75rem',
			titleLongWidth: '9.375rem',
		},
	},
	table: {
		desktop: {
			height: '4.25rem',
			width: 18.875,
		},
	},
};

// 컬러 수정
export const colorPalette = {
	primary: '#414c80',
	secondary: '#003389',
	tertiary: '#25a3d2',
	lightBlack: '#303030',
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
	navColor: '#4d4d4d',
};

// 디스플레이 사이즈
export const viewSize = {
	mobile: '375px',
	tablet: '992px',
	desktop: '1920px',
};

// 필수 정보 리스트
export const requiredInfo = {
	name: {required: true},
	depositor: {required: true},
	phone: {required: true},
	phone1: {required: true},
	phone2: {required: true},
	phone3: {required: true},
	post_number: {required: true},
	address: {required: true},
	detail_address: {required: true},
	representative: {required: true},
	gender: {required: true},
	email: {required: false},
	birth: {required: true},
	year: {required: true},
	month: {required: true},
	day: {required: true},
	course: {required: true},
	gift: {required: true},
	group_name: {required: true},
	participated: {required: true},
	class_name: {required: true},
	school_name: {required: true},
	volunteer_id: {required: false},
	bib: {required: false},
};

// 등록
export const TOKEN = '961ab6aa-95f2-4447-98d3-c92b70f87061';
export const API = 'http://localhost:8000';

export const defaultInfo = {
	mainTitle: '',
	date: '',
	bank: '',
	courseFee: '',
	accountHolder: '',
};

export const courseList = ['풀코스', '하프코스', '10km코스', '5km코스'];

export const giftMap = {
	'10km코스': ['신발', '옷'],
	'5km코스': ['신발', '굳즈'],
	풀코스: ['신발', '물'],
	하프코스: ['신발', '음료'],
};

export const participatedList = [
	{date: '2022-12-01', weekday: '월'},
	{date: '2022-12-02', weekday: '화'},
	{date: '2022-12-03', weekday: '수'},
];

export const navProps = {
	logo: logo,
	links: [
		{name: '대회안내', key: 'info'},
		{name: '대회코스', key: 'course'},
		{name: '참가신청', key: 'participation'},
		{name: '대회기록', key: 'record'},
		{name: '참여마당', key: 'ground'},
	],
	button: {
		text: {
			children: '참가신청하기',
			fontSize: {
				desktop: fontSize.lg,
			},
			color: colorPalette.white,
			fontWeight: fontWeight.medium,
			fontFamily: 'Gmarket',
		},
		onClick: () =>
			(window.location.href = `${window.location.origin}/participation/person`),
		isRounded: true,
	},
	menus: [
		{
			title: '대회안내',
			menu: [
				{name: '대회 안내', href: '/info/summary'},
				{name: '시상 안내', href: '/info/award'},
				{name: '유의 사항', href: '/info/note'},
				{name: '참가 기념품', href: '/info/gift'},
				{name: '오시는 길', href: '/info/direction'},
			],
		},
		{
			title: '대회 코스',
			menu: [{name: '대회 코스', href: '/course'}],
		},
		{
			title: '참가신청',
			menu: [
				{name: '개인 참가신청', href: '/participation/person'},
				{name: '단체 참가신청', href: '/participation/group'},
				{
					name: '개인 참가신청 조회/수정',
					href: '/participation/person-update',
				},
				{
					name: '단체 참가신청 조회/수정',
					href: '/participation/group-update',
				},
			],
		},
		{
			title: '대회기록',
			menu: [
				{name: '기록 조회', href: '/record/check'},
				{name: '기록 업로드', href: '/record/boards'},
			],
		},
		{
			title: '참여마당',
			menu: [
				{name: '자원봉사 신청', href: '/participation/volunteer'},
				{
					name: '자원봉사 신청 조회/수정',
					href: '/participation/volunteer-update',
				},
				{name: '홍보 게시판', href: '/ground/promotion'},
				{name: '환불 게시판', href: '/ground/refund'},
				{name: '자유 게시판', href: '/ground/free'},
				{name: '대회 사진', href: '/ground/picture'},
				{name: '공지 사항', href: '/ground/notify'},
			],
		},
	],
};

const footerProps = {
	name: '화순',
	tel: '061-858-2456',
	fax: '061-858-2456',
};
