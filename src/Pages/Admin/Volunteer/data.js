import {colorPalette} from '../../../config';
import {makeParticipated} from '../../../util';

export const orderInit = {
	school_name: false,
	grade: false,
	name: false,
	participated: false,
	id: false,
};

export const participatedFilter = [
	{value: '', name: '전체', label: '전체'},
].concat(makeParticipated());

export const checkBoxProps = {
	fields: {
		title: {
			children: '항목(아무것도 선택안한 경우 전체)',
		},
		items: [
			{value: 'name', name: '이름'},
			{value: 'participated', name: '참여날짜'},
			{value: 'phone', name: '연락처'},
			{value: 'birth', name: '생년월일'},
			{value: 'school_name', name: '학교명'},
			{value: 'grade', name: '반'},
			{value: 'volunteer_id', name: '1635ID'},
		],
	},
	order: {
		title: {
			children: '정렬(선택안한 경우 입력 순)',
		},
		items: [
			{value: 'name', name: '이름'},
			{value: 'school_name', name: '학교명'},
			{value: 'grade', name: '학년'},
			{value: 'participated', name: '참여날짜'},
			{value: 'id', name: '입력순'},
		],
	},
	availableList: ['fields', 'order'],
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

export const actionOptions = [
	{value: '', label: '선택'},
	{value: 'delete', label: '삭제'},
];

export const columns = [
	{title: '번호', dataIndex: 'no'},
	{title: '이름', dataIndex: 'name', sorter: {multiple: 1}},
	{title: '참여날짜', dataIndex: 'participated', sorter: {multiple: 1}},
	{title: '연락처', dataIndex: 'phone', sorter: {multiple: 1}},
	{title: '생년월일', dataIndex: 'birth', sorter: {multiple: 1}},
	{title: '학교명', dataIndex: 'school_name', sorter: {multiple: 1}},
	{
		title: '반',
		dataIndex: '',
		render: (_, record) => `${record.grade}-${record.class_name}`,
	},
	{title: '1636ID', dataIndex: 'volunteer_id', sorter: {multiple: 1}},
];
