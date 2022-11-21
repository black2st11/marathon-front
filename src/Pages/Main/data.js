import {colorPalette, fontSize, fontWeight} from '../../config';
import {
	participateLogoImg,
	recogLogoImg,
	infoLogoImg,
	recordLogoImg,
	notifyLogoImg,
	cbsImg,
	gyeongSangImg,
	jinjuImg,
	courseImg,
} from '../../config/images';

const dateTextProps = {
	title: {
		fontSize: {
			desktop: fontSize.xl5,
		},
		color: colorPalette.white,
		fontWeight: fontWeight.bold,
		shadow: `0 0 10px rgba(0, 0, 0, 0.7);`,
	},
	unit: {
		fontSize: {
			desktop: fontSize.xl2,
		},
		color: colorPalette.white,
		fontWeight: fontWeight.bold,
		opacity: 0.64,
		shadow: `0 0 10px rgba(0, 0, 0, 0.7);`,
	},
	value: {
		fontSize: {
			desktop: fontSize.xl7,
		},
		color: colorPalette.white,
		fontWeight: fontWeight.bold,
		shadow: `0 0 10px rgba(0, 0, 0, 0.7);`,
	},
};

export const firstProps = {
	title: {
		type: 'h2',
		children: `2022 대한민국 마라톤 송년\n남부내륙철도 조기착공 기원 전국마라톤대회`,
		fontSize: {
			desktop: fontSize.xl6,
			mobile: fontSize.xl2,
		},
		color: colorPalette.thText,
		fontWeight: fontWeight.medium,
	},
	content: {
		type: 'p',
		children: `2022년 12월 31일(토) 13:30\n경남 진주시 진주역`,
		fontSize: {
			desktop: fontSize.xl2,
			mobile: fontSize.xl,
		},
		color: colorPalette.lightBlack,
		fontWeight: fontWeight.semiBold,
	},
	button: {
		text: {
			children: '신청하기',
			fontSize: {
				desktop: fontSize.xl2,
				mobile: fontSize.xl,
			},
			color: colorPalette.black,
			fontWeight: fontWeight.medium,
		},
		isRounded: true,
		border: `2px solid ${colorPalette.black}`,
		bgColor: 'transparent',
	},
	date: {
		title: {...dateTextProps.title, children: '행사 시작까지'},
		day: {...dateTextProps.unit, children: 'DAY'},
		dayValue: {...dateTextProps.value, children: '14'},
		hour: {...dateTextProps.unit, children: 'HOUR'},
		hourValue: {...dateTextProps.value, children: '8'},
		minute: {...dateTextProps.unit, children: 'MINUTES'},
		minuteValue: {...dateTextProps.value, children: '25'},
		second: {...dateTextProps.unit, children: 'SECONDS'},
		secondValue: {...dateTextProps.value, children: '32'},
	},
};

const secondTextProps = {
	title: {
		fontSize: {
			desktop: fontSize.xl3,
		},
		color: colorPalette.secondary,
		fontWeight: fontWeight.medium,
	},
	content: {
		fontSize: {
			desktop: fontSize.base,
		},
		color: colorPalette.noneBorder,
		fontWeight: fontWeight.medium,
	},
	support: {
		fontSize: {
			desktop: fontSize.xl2,
		},
		color: colorPalette.base,
		fontWeight: fontWeight.semiBold,
	},
};

export const secondProps = {
	info: {
		title: {
			...secondTextProps.title,
			children: '마라톤 알아보기',
		},
		content: {
			...secondTextProps.content,
			children: `마라톤에 도움이 되는 바로가기\n정보를 안내합니다.`,
		},
		links: [
			{
				img: {src: participateLogoImg},
				text: {...secondTextProps.content, children: '참가신청'},
			},
			{
				img: {src: recogLogoImg},
				text: {...secondTextProps.content, children: '접수확인'},
			},
			{
				img: {src: infoLogoImg},
				text: {...secondTextProps.content, children: '대회요강'},
			},
			{
				img: {src: recordLogoImg},
				text: {...secondTextProps.content, children: '대회기록'},
			},
			{
				img: {src: notifyLogoImg},
				text: {...secondTextProps.content, children: '공지사항'},
			},
		],
	},
	supports: [
		{
			title: {...secondTextProps.support, children: '주최'},
			imgs: [{src: cbsImg}],
		},
		{
			title: {...secondTextProps.support, children: '후원'},
			imgs: [{src: gyeongSangImg}, {src: jinjuImg}],
		},
	],
};

export const thirdTextProps = {
	title: {
		fontSize: {
			desktop: fontSize.xl3,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.white,
	},
	description: {
		fontSize: {
			desktop: fontSize.base,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.white,
	},
	item: {
		title: {
			fontSize: {
				desktop: fontSize.lg,
			},
			color: colorPalette.realBlack,
			fontWeight: fontWeight.bold,
		},
		content: {
			fontSize: {
				desktop: fontSize.lg,
			},
			color: colorPalette.realBlack,
			fontWeight: fontWeight.normal,
		},
		smalContent: {
			fontSize: {
				desktop: fontSize.base,
			},
			color: colorPalette.tertiary,
			fontWeight: fontWeight.medium,
		},
	},
};

export const thirdProps = {
	title: {
		bgColor: colorPalette.white,
		height: '5px',
		text: {...thirdTextProps.title, children: '대회요강', type: 'p'},
		description: {
			...thirdTextProps.description,
			children: '반드시 참가 유의사항을 읽고 신청해주세요.',
		},
	},
	first: [
		{
			title: {...thirdTextProps.item.title, children: '대회명'},
			contents: [
				{
					children: `2022 대한민국 마라톤 송년\n남부내륙철도 조기착공 기원 전국마라톤대회`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '대회일시'},
			contents: [
				{
					...thirdTextProps.item.title,
					children: `2022년 12월 31일(토) 개회식: 13:00/출발: 13:30`,
				},
				{
					...thirdTextProps.item.content,
					children: `13:30 하프코스 출발\n13:40 10km코스 출발\n13:50 5km코스 출발\n`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '집결시간'},
			contents: [{children: `해당코스 출발 30분 전 집결완료`}],
		},
		{
			title: {...thirdTextProps.item.title, children: '장소'},
			contents: [{children: `진주역`}],
		},
		{
			title: {...thirdTextProps.item.title, children: '참가구분'},
			contents: [
				{...thirdTextProps.item.content, children: `하프/10km/5km`},
				{
					...thirdTextProps.item.content,
					children: `3가지 코스 중 선택 가능`,
				},
			],
		},
	],
	second: [
		{
			title: {...thirdTextProps.item.title, children: '참가자격'},
			contents: [
				{
					...thirdTextProps.item.content,
					children: `내외국인 누구나 나이제한 없으며, 신체 건강한 남녀 누구나`,
				},
				{
					...thirdTextProps.item.smalContent,
					children: `대한육상경기연맹 등록선수 및 선수등록 말소 후\n2년 경과되지 않은 자는 시상에서 제외됩니다.`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '접수기간'},
			contents: [
				{
					...thirdTextProps.item.title,
					children: `2022년 12월 19일 (월) 18:00까지`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '제공품'},
			contents: [
				{
					...thirdTextProps.item.content,
					children: `기념품, 배번호, 기록칩(하프, 10km), 안내책자, 그 외 필요한 물품`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '시상'},
			contents: [
				{
					...thirdTextProps.item.content,
					children: `하프코스 남녀 1위 / 2위 / 3위\n10km코스 남녀 각 1위 / 2위 / 3위\n5km코스 남녀 1위 / 2위 / 3위`,
				},
			],
		},
		{
			title: {...thirdTextProps.item.title, children: '코스'},
			contents: [
				{
					...thirdTextProps.item.content,
					children: `진주역 ~ 문산읍 갈곡마을 (자전거도로이용)`,
				},
			],
		},
	],
};

const fourthTextProps = {
	title: {
		fontSize: {
			desktop: fontSize.xl3,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.black,
	},
	description: {
		fontSize: {
			desktop: fontSize.base,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.placeholder,
	},
};

export const fourthProps = {
	title: {
		bgColor: colorPalette.primary,
		height: '5px',
		text: {...fourthTextProps.title, children: '대회요강', type: 'p'},
		description: {
			...fourthTextProps.description,
			children: '반드시 참가 유의사항을 읽고 신청해주세요.',
		},
	},
	course: {
		src: courseImg,
		alt: '코스',
		borderRadius: '1.375rem',
	},
};

export const modalProps = {
	isClose: false,
	img: {src: courseImg},
};
