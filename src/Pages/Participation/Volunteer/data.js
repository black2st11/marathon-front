import {onlyLetter, onlyNumber} from '../../../util/validator';
import {
	inputTextProps,
	formButtonProps,
	inputEnglishTextProps,
	warnText,
} from '../../common';
import {makeDay, makeMonth, makeParticipated, makeYear} from '../../../util';

export const firstProps = {
	inputs: [
		{
			type: 'radio',
			multiple: true,
			name: 'participated',
			text: {
				...inputTextProps,
				children: '봉사날짜',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Date',
			},
			items: makeParticipated(),
			warnText: {
				...warnText,
			},
		},
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
				placeholder: '이름을 입력해주세요.',
			},
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
					maxlength: 3,
					placeholder: '010',
				},
				{
					name: 'phone2',
					pattern: onlyNumber,
					maxlength: 4,
					placeholder: '1111',
				},
				{
					name: 'phone3',
					pattern: onlyNumber,
					maxlength: 4,
					placeholder: '2222',
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'school',
			text: {
				...inputTextProps,
				children: '학교명',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name of school',
			},
			input: {
				name: 'school',
				placeholder: '학교명을 입력해주세요.',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'class_name',
			text: {
				...inputTextProps,
				children: '학년반',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Grade and class',
			},
			sep: true,
			inputs: [
				{
					name: 'grade',
					pattern: onlyNumber,
					sep: {
						children: '학년',
						placeholder: '학년을 입력해주세요.',
					},
				},
				{
					name: 'class',
					pattern: onlyNumber,
					sep: {
						children: '반',
						placeholder: '반을 입력해주세요.',
					},
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'volunteer_id',
			text: {
				...inputTextProps,
				children: '1365 ID',
			},
			englishText: {
				...inputEnglishTextProps,
				children: '',
			},
			input: {
				name: 'volunteer_id',
				placeholder: '1365ID를 입력해주세요.',
			},
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '신청하기',
		},
	},
};

export const initialInfo = {
	participated: [],
	name: '',
	phone1: '',
	phone2: '',
	phone3: '',
	year: '',
	month: '',
	day: '',
	school: '',
	grade: '',
	class: '',
	volunteer_id: '',
};

export const invalidProps = {
	participated: '',
	name: '',
	phone: '',
	birth: '',
	school: '',
	depart: '',
	volunteer_id: '',
};
