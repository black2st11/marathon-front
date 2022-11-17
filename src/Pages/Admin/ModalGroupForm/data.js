import {makeDay, makeMonth, makeYear} from '../../../util';

export const groupProps = {
	items: [
		{
			type: 'input',
			text: {children: '단체이름'},
			item: {
				name: 'name',
			},
		},
		{
			type: 'input',
			text: {children: '대표자이름'},
			item: {
				name: 'representative',
			},
		},
		{
			type: 'input',
			text: {children: '단체이름'},
			item: {
				name: 'name',
			},
		},
		{
			type: 'inputs',
			text: {children: '대표자 연락처'},
			item: [
				{name: 'phone1', mexlength: 3},
				{name: 'phone2', mexlength: 4},
				{name: 'phone3', mexlength: 4},
			],
		},
		{
			type: 'selects',
			text: {children: '대표자 생년월일'},
			item: [
				{name: 'year', options: makeYear()},
				{name: 'month', options: makeMonth()},
				{name: 'day', options: makeDay()},
			],
		},
		{
			type: 'input',
			text: {children: '이메일'},
			item: {
				name: 'email',
			},
		},
		{
			type: 'input',
			text: {children: '우편번호'},
			item: {
				name: 'post_number',
			},
		},
		{
			type: 'input',
			text: {children: '주소'},
			item: {
				name: 'address',
			},
		},
		{
			type: 'input',
			text: {children: '상세주소'},
			item: {
				name: 'detail_address',
			},
		},
	],
};

export const participationProps = {
	ths: [
		{
			category: 'check',
			onClick: () => console.log('check'),
			borderRadius: '0.3rem',
		},
		{children: '이름'},
		{children: '생년월일'},
		{children: '성별'},
		{children: '연락처'},
		{children: '배번'},
		{children: '종목'},
		{children: '기념품'},
		{children: '입금여부'},
		{children: '삭제버튼'},
	],
	trs: [],
};

export const buttonProps = {
	button: {
		text: {
			children: '저장',
			color: 'white',
		},
	},
};
