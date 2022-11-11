import {
	inputTextProps,
	inputEnglishTextProps,
	formButtonProps,
	inputButtonProps,
	warnText,
} from '../../common';
import {onlyLetter, onlyNumber} from '../../../util/validator';
import {makeDay, makeMonth, makeYear} from '../../../util';
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
			type: 'input',
			name: 'phone',
			text: {
				...inputTextProps,
				children: '연락처',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Contact',
			},
			sep: true,
			inputs: [
				{
					name: 'phone1',
					pattern: onlyNumber,
				},
				{
					name: 'phone2',
					pattern: onlyNumber,
				},
				{
					name: 'phone3',
					pattern: onlyNumber,
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'select',
			name: 'birth',
			text: {
				...inputTextProps,
				children: '생년월일',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Date of Birth',
			},
			selects: [
				{
					name: 'year',
					placeholder: '년도 (Year)',
					options: makeYear(),
				},
				{
					name: 'month',
					placeholder: '월 (Month)',
					options: makeMonth(),
				},
				{
					name: 'day',
					placeholder: '월 (Day)',
					options: makeDay(),
				},
			],
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
					children: 'male',
				},
				{
					value: '여성',
					children: 'female',
				},
			],
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '다음단계',
		},
	},
};

export const secondProps = {
	inputs: [
		{
			type: 'input',
			name: 'post_number',
			text: {
				...inputTextProps,
				children: '주소',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Address',
			},
			input: {
				name: 'post_number',
				pattern: onlyNumber,
			},
			button: {
				isRounded: true,
				text: {
					...inputButtonProps,
					children: '우편번호 찾기',
				},
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'address',
			input: {
				name: 'address',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'detail_address',
			input: {
				name: 'detail_address',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'email',
			text: {
				...inputTextProps,
				children: '이메일',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'E-mail',
			},
			input: {
				name: 'email',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'depositor',
			text: {
				...inputTextProps,
				children: '입금자명',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name of depositor',
			},
			input: {
				name: 'depositor',
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
			items: [
				{
					value: '풀코스',
					children: '풀코스 부문',
				},
				{
					value: '하프코스',
					children: '하프코스 부문',
				},
				{
					value: '10km코스',
					children: '10km코스 부문',
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'select',
			name: 'gift',
			text: {
				...inputTextProps,
				children: '기념품 옵션',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Option',
			},
			selects: [
				{
					name: 'gift',
					placeholder: '기념품 선택',
					options: [
						{value: '01', name: '01'},
						{value: 2, name: '사이즈 100'},
						{value: 3, name: '사이즈 105'},
						{value: 4, name: '사이즈 110'},
						{value: 5, name: '사이즈 115'},
					],
				},
			],
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '신청완료',
		},
	},
};

export const invalidProps = {
	name: '',
	phone: '',
	birth: '',
	gender: '',
	post_number: '',
	address: '',
	detail_address: '',
	email: '',
	depositor: '',
	course: '',
	gift: '',
};
