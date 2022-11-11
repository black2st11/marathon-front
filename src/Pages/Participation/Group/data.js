import {
	inputTextProps,
	inputEnglishTextProps,
	formButtonProps,
	inputButtonProps,
	groupThProps,
	warnText,
} from '../../common';
import {fontSize, fontWeight, colorPalette} from '../../../config';
import {onlyLetter, onlyNumber} from '../../../util/validator';
import {makeDay, makeMonth, makeYear} from '../../../util';
export const firstProps = {
	inputs: [
		{
			type: 'input',
			category: 'long',
			name: 'name',
			text: {
				...inputTextProps,
				children: '단체명',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Group name',
			},
			input: {
				name: 'name',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			category: 'long',
			name: 'representative',
			text: {
				...inputTextProps,
				children: '대표자 이름',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name of the representative',
			},
			sep: true,
			input: {
				name: 'representative',
				pattern: onlyLetter,
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'select',
			category: 'long',
			name: 'birth',
			text: {
				...inputTextProps,
				children: '대표자 생년월일',
			},
			englishText: {
				...inputEnglishTextProps,
				children: "Representative's date of Birth",
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
			name: 'phone',
			text: {
				...inputTextProps,
				children: '대표 연락처',
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
					limit: '3',
				},
				{
					name: 'phone2',
					pattern: onlyNumber,
					limit: 4,
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
	],
	button: {
		text: {
			...formButtonProps,
			children: '신청완료',
		},
	},
};

const btnTxtProps = {
	fontSize: {
		desktop: fontSize.lg,
	},
	color: colorPalette.primary,
	fontWeight: fontWeight.medium,
};

const btnProps = {
	bgColor: colorPalette.white,
	border: `1px solid ${colorPalette.primary}`,
	isRounded: true,
	padding: `0.5rem 1.5rem`,
};

export const groupProps = {
	ths: [
		{
			category: 'check',
			onClick: () => console.log('check'),
			borderRadius: '0.3rem',
		},
		{...groupThProps, children: '성명'},
		{...groupThProps, children: '성별'},
		{...groupThProps, children: '생년월일'},
		{...groupThProps, children: '휴대폰번호'},
		{...groupThProps, children: '종목'},
		{...groupThProps, children: '기념품 옵션'},
		{...groupThProps, children: '삭제'},
	],
	trs: [],
	checkBtn: {
		...btnProps,
		text: {
			...btnTxtProps,
			children: '전체선택',
		},
	},
	deleteBtn: {
		...btnProps,
		text: {
			...btnTxtProps,
			children: '선택삭제',
		},
	},
	addBtn: {
		...btnProps,
		text: {
			...btnTxtProps,
			children: '인원추가',
		},
	},
	currentText: {
		normal: {
			fontSize: {
				desktop: fontSize.lg,
			},
			fontWeight: fontWeight.normal,
			color: colorPalette.base,
		},
		strong: {
			fontSize: {
				desktop: fontSize.xl2,
			},
			fontWeight: fontWeight.semiBold,
			color: colorPalette,
		},
		preFix: '참가인원 : ',
		postFix: '명',
	},
};

export const invalidProps = {
	name: '',
	representative: '',
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
