import {colorPalette} from '../../../config';

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
		options: [
			{value: 'delete', name: '영구 삭제'},
			{value: 'recover', name: '복구'},
		],
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
		{children: '복구버튼'},
		{children: '삭제버튼'},
	],
	trs: [],
};
