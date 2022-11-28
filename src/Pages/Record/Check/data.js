import {
	inputTextProps,
	inputEnglishTextProps,
	formButtonProps,
	inputButtonProps,
	warnText,
	ulsContentProps,
} from '../../common';
import {onlyLetter, onlyNumber} from '../../../util/validator';
import {makeCourse} from '../../../util';
export const firstProps = {
	inputs: [
		{
			type: 'input',
			name: 'name',
			text: {
				...inputTextProps,
				children: '이름',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name',
			},
			input: {
				name: 'name',
				pattern: onlyLetter,
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'radio',
			name: 'gender',
			text: {
				...inputTextProps,
				children: '성별',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Gender',
			},
			items: [
				{
					value: '남성',
					children: '남성',
				},
				{
					value: '여성',
					children: '여성',
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'bib',
			text: {
				...inputTextProps,
				children: '배번호',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Bib number',
			},
			input: {
				name: 'bib',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'radio',
			name: 'course',
			text: {
				...inputTextProps,
				children: '참가종목',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Participating events',
			},
			items: makeCourse(),
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '확인',
		},
	},
};

export const secondProps = {
	info: [
		[
			{title: {children: '성명'}, content: {children: '홍길동'}},
			{title: {children: '배 번호'}, content: {children: '0000'}},
		],
		[
			{title: {children: '개인 기록'}, content: {children: '02:49'}},
			{title: {children: '00 반환'}, content: {children: '01:23'}},
		],
	],
	cardContent: {
		uls: [
			{
				listStyle: 'circle',
				items: [
					{
						content: {
							...ulsContentProps,
							children:
								'기록에 문의가 있으신 분은 055-754-9435으로 연락주시면 감사하겠습니다.',
						},
					},
					{
						content: {
							...ulsContentProps,
							children:
								'참가비 입금이 되어야 접수가 완료되며 참가자명과 입금자명이 다를 경우 필히 대회사무국으로 전화 주시기 바랍니다.',
						},
					},
				],
			},
		],
	},
	button: {
		text: {
			...formButtonProps,
			children: '수정하기',
		},
	},
};

export const initialInfo = {
	name: '',
	bib: '',
	gender: '',
	course: '',
	personal_record: '',
	return_record: '',
};

export const invalidProps = {
	name: '',
	bib: '',
	gender: '',
	course: '',
};
