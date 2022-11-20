import {colorPalette} from '../../../config';

export const orderInit = {
	'gender-name': false,
	'course-gender-name': false,
	'course-group__name-gender': false,
};

export const categoryInit = {
	person: false,
	group: false,
	all: false,
};

export const depositInit = {
	deposit: false,
	'no-deposit': false,
	all: false,
};

export const depositFilter = [
	{value: '', label: '전체'},
	{value: 'True', label: '입금'},
	{value: 'False', label: '미입금'},
];

export const genderFilter = [
	{value: '', label: '전체'},
	{value: '남성', label: '남성'},
	{value: '여성', label: '여성'},
];

export const checkBoxProps = {
	fields: {
		title: {
			children: '항목(아무것도 선택안한 경우 전체)',
		},
		items: [
			{value: 'name', name: '이름'},
			{value: 'course', name: '종목'},
			{value: 'gender', name: '성별'},
			{value: 'phone', name: '연락처'},
			{value: 'group_name', name: '단체명'},
			{value: 'post_number', name: '우편번호'},
			{value: 'address', name: '주소'},
			{value: 'detail_address', name: '상세주소'},
			{value: 'depositor', name: '입금자명'},
			{value: 'gift', name: '기념품'},
			{value: 'is_deposit', name: '입금여부'},
			{value: 'category', name: '신청서종류'},
		],
	},
	order: {
		title: {
			children: '정렬(선택안한 경우 입력 순)',
		},
		items: [
			{
				checkBox: {name: 'gender-name'},
				text: {children: '성별(1순위) + 이름(2순위)'},
			},
			{
				checkBox: {name: 'course-gender-name'},
				text: {children: '종목(1순위) + 성별(2순위) + 이름(3순위)'},
			},
			{
				checkBox: {name: 'course-group__name-gender'},
				text: {children: '종목(1순위) + 단체(2순위) + 성별(3순위)'},
			},
			{checkBox: {name: 'id'}, text: {children: '입력순'}},
		],
	},
	deposit: {
		title: {
			children: '입금 구분',
		},
		items: [
			{checkBox: {name: 'deposit'}, text: {children: '입금'}},
			{checkBox: {name: 'no-deposit'}, text: {children: '미입금'}},
			{checkBox: {name: 'all'}, text: {children: '전체'}},
		],
	},
	category: {
		title: {
			children: '신청서 구분',
		},
		items: [
			{checkBox: {name: 'group'}, text: {children: '단체'}},
			{checkBox: {name: 'person'}, text: {children: '개인'}},
			{checkBox: {name: 'all'}, text: {children: '전체'}},
		],
	},
	availableList: ['fields', 'order', 'deposit', 'category'],
	button: {
		text: {
			children: '엑셀 출력',
			color: colorPalette.white,
		},
	},
};

export const searchProps = {
	button: {
		isRounded: true,
		text: {
			children: '검색',
			color: colorPalette.white,
		},
	},
};

export const selectProps = {
	options: [
		{value: '', label: '선택'},
		{value: 'delete', label: '임시 삭제'},
		{value: 'set_deposit', label: '입금 처리'},
		{value: 'unset_deposit', label: '미입금 처리'},
	],
	button: {
		isRounded: true,
		text: {
			children: '실행',
			color: colorPalette.white,
		},
	},
};

export const tableProps = {
	maxWidth: '1160px',
	ths: [
		{
			category: 'check',
			onClick: () => console.log('check'),
			borderRadius: '0.3rem',
		},
		{children: '수정'},
		{children: '번호'},
		{children: '이름'},
		{children: '구분'},
		{children: '단체이름'},
		{children: '배번'},
		{children: '입금자명'},
		{children: '생년월일'},
		{children: '종목'},
		{children: '성별'},
		{children: '연락처'},
		{children: '기념품'},
		{children: '신청일'},
		{children: '입금여부'},
		{children: '입금버튼'},
		{children: '삭제버튼'},
	],
	trs: [],
};

export const columns = [
	{title: '번호', dataIndex: 'no'},
	{title: '이름', dataIndex: 'name'},
	{title: '구분', dataIndex: 'category'},
	{title: '단체이름', dataIndex: 'group_name'},
	{title: '배번', dataIndex: 'bib'},
	{title: '입금자명', dataIndex: 'depositor'},
	{title: '생년월일', dataIndex: 'birth'},
	{title: '종목', dataIndex: 'course'},
	{title: '성별', dataIndex: 'gender'},
	{title: '연락처', dataIndex: 'phone'},
	{title: '기념품', dataIndex: 'gift'},
	{title: '신청일', dataIndex: 'created'},
];
