import {colorPalette} from '../../../config';

export const checkBoxProps = {
	fields: {
		title: {
			children: '항목(아무것도 선택안한 경우 전체)',
		},
		items: [
			{checkBox: {name: 'fields'}, text: {children: '이름'}},
			{checkBox: {name: 'fields'}, text: {children: '참여날짜'}},
			{checkBox: {name: 'fields'}, text: {children: '연락처'}},
			{checkBox: {name: 'fields'}, text: {children: '생년월일'}},
			{checkBox: {name: 'fields'}, text: {children: '학교명'}},
			{checkBox: {name: 'fields'}, text: {children: '반'}},
			{checkBox: {name: 'fields'}, text: {children: '1635ID'}},
		],
	},
	order: {
		title: {
			children: '정렬(선택안한 경우 입력 순)',
		},
		items: [
			{checkBox: {name: 'order'}, text: {children: '이름'}},
			{checkBox: {name: 'order'}, text: {children: '학교명'}},
			{checkBox: {name: 'order'}, text: {children: '학년'}},
			{checkBox: {name: 'order'}, text: {children: '참여날짜'}},
			{checkBox: {name: 'order'}, text: {children: '입력순'}},
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

export const selectProps = {
	select: {
		options: [{value: 'delete', name: '삭제'}],
	},
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
		{children: '참여날짜'},
		{children: '연락처'},
		{children: '생년월일'},
		{children: '학교명'},
		{children: '반'},
		{children: '1636ID'},
		{children: '삭제버튼'},
	],
	trs: [
		[
			{children: '1'},
			{children: '문정훈'},
			{children: '2022-01-01'},
			{children: '01086147257'},
			{children: '1995-05-16'},
			{children: '00학교'},
			{children: '00반'},
			{children: 'black'},
			{button: {text: {children: '삭제 처리', color: 'white'}}},
		],
	],
};
