import {colorPalette, fontSize, fontWeight} from '../../../config';

export const buttonProps = {
	text: {
		children: '글쓰기',
		fontSize: {desktop: fontSize.lg},
		color: colorPalette.primary,
		fontWeight: fontWeight.medium,
	},
	isRounded: true,
	border: `1px solid ${colorPalette.primary}`,
	bgColor: colorPalette.white,
};

export const paginationProps = {
	current: 2,
	total: 20,
	textProps: {
		fontSize: {
			desktop: fontSize.xl,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.border,
	},
	currentTextProps: {
		fontSize: {
			desktop: fontSize.xl,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.primary,
	},
};

export const normalBoardsProps = {
	titles: [
		{
			text: {children: '번호'},
		},
		{
			text: {children: '제목'},
			flex: 5,
		},
		{
			text: {children: '등록일'},
			display: {
				desktop: 'flex',
				tablet: 'flex',
				mobile: 'none',
			},
		},
		{
			text: {children: '조회'},
			display: {
				desktop: 'flex',
				tablet: 'flex',
				mobile: 'none',
			},
		},
	],
	contents: [
		{
			no: '15',
			title: '제 16회 여수 해양마라톤 접수 시작! ',
			date: '2022-06-21',
			hit: '조회',
		},
		{
			no: '15',
			title: '제 16회 여수 해양마라톤 접수 시작! ',
			date: '2022-06-21',
			hit: '조회',
		},
	],
	button: {
		text: {
			children: '글쓰기',
			fontSize: {desktop: fontSize.lg},
			color: colorPalette.primary,
			fontWeight: fontWeight.medium,
		},
		isRounded: true,
		border: `1px solid ${colorPalette.primary}`,
		bgColor: colorPalette.white,
	},
};

export const refundBoardsProps = {
	titles: [
		{
			text: {children: '번호'},
		},
		{
			text: {children: '제목'},
			flex: 5,
		},
		{
			text: {children: '등록일'},
			display: {
				desktop: 'flex',
				tablet: 'flex',
				mobile: 'none',
			},
		},
		{
			text: {children: '답변'},
			display: {
				desktop: 'flex',
				tablet: 'flex',
				mobile: 'none',
			},
		},
	],
	contents: [
		{
			no: '15',
			title: '제 16회 여수 해양마라톤 접수 시작! ',
			date: '2022-06-21',
			hit: 'O',
		},
		{
			no: '15',
			title: '제 16회 여수 해양마라톤 접수 시작! ',
			date: '2022-06-21',
			hit: 'X',
		},
	],
};
