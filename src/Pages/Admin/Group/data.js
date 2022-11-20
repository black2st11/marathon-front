import {colorPalette} from '../../../config';

export const orderInit = {
	name: false,
	representative: false,
	created: false,
};

export const depositInit = {
	deposit: false,
	'no-deposit': false,
	all: false,
};

export const checkBoxProps = {
	fields: {
		title: {
			children: '항목(아무것도 선택안한 경우 전체)',
		},
		items: [
			{value: 'name', name: '단체명'},
			{value: 'representative', name: '대표자'},
			{value: 'phone', name: '연락처'},
			{value: 'post_number', name: '우편번호'},
			{value: 'address', name: '주소'},
			{value: 'detail_address', name: '상세주소'},
			{value: 'is_deposit', name: '입금여부'},
			{value: 'created', name: '신청일'},
		],
	},
	order: {
		title: {
			children: '정렬(선택안한 경우 입력 순)',
		},
		items: [
			{value: 'id', name: '입력순'},
			{value: 'name', name: '단체명'},
			{value: 'representative', name: '대표자'},
			{value: 'address', name: '주소'},
		],
	},
	deposit: {
		title: {
			children: '입금 구분',
		},
		items: [
			{value: 'all', name: '전체'},
			{value: 'deposit', name: '입금'},
			{value: 'no-deposit', name: '미입금'},
		],
	},
	availableList: ['fields', 'order', 'deposit'],
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
		{value: 'delete', label: '삭제'},
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

export const columns = [
	{title: '번호', dataIndex: 'no'},
	{title: '단체명', dataIndex: 'name'},
	{title: '대표자', dataIndex: 'representative'},
	{title: '연락처', dataIndex: 'phone'},
	{title: '우편번호', dataIndex: 'post_number'},
	{title: '주소', dataIndex: 'address'},
	{title: '상세주소', dataIndex: 'detail_address'},
	{title: '입금카운트', dataIndex: 'deposit_count'},
];
