import {colorPalette} from '../../../config';

export const orderInit = {
	'gender-name': false,
	'course-gender-name': false,
	'course-group__name-gender': false,
};

export const categoryInit = {
	person: false,
	group: false,
	'all-category': false,
};

export const depositInit = {
	deposit: false,
	'no-deposit': false,
	'all-deposit': false,
};

export const checkBoxProps = {
	fields: {
		title: {
			children: '항목(아무것도 선택안한 경우 전체)',
		},
		items: [
			{checkBox: {name: 'name'}, text: {children: '이름'}},
			{checkBox: {name: 'course'}, text: {children: '종목'}},
			{checkBox: {name: 'birth'}, text: {children: '생년월일'}},
			{checkBox: {name: 'gender'}, text: {children: '성별'}},
			{checkBox: {name: 'phone'}, text: {children: '연락처'}},
			{checkBox: {name: 'group__name'}, text: {children: '단체명'}},
			{checkBox: {name: 'post_number'}, text: {children: '우편번호'}},
			{checkBox: {name: 'address'}, text: {children: '주소'}},
			{checkBox: {name: 'detail_address'}, text: {children: '상세주소'}},
			{checkBox: {name: 'depositor'}, text: {children: '입금자명'}},
			{checkBox: {name: 'gift'}, text: {children: '기념품'}},
			{checkBox: {name: 'is_deposit'}, text: {children: '입금여부'}},
			{checkBox: {name: 'category'}, text: {children: '신청서종류'}},
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
			{checkBox: {name: 'all-deposit'}, text: {children: '전체'}},
		],
	},
	category: {
		title: {
			children: '신청서 구분',
		},
		items: [
			{checkBox: {name: 'group'}, text: {children: '단체'}},
			{checkBox: {name: 'person'}, text: {children: '개인'}},
			{checkBox: {name: 'all-category'}, text: {children: '전체'}},
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
	select: {
		options: [
			{value: 'delete', name: '임시 삭제'},
			{value: 'set_deposit', name: '입금 처리'},
			{value: 'unset_deposit', name: '미입금 처리'},
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
		{children: '입금버튼'},
		{children: '삭제버튼'},
	],
	trs: [],
};
