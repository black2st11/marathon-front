import {fontWeight, colorPalette, fontSize} from '../../../config';
import {
	cardTitleProps,
	ulsTitleProps,
	ulsContentProps,
	tdProps,
	thProps,
} from '../../common';

export const summary = {
	title: {
		text: {...cardTitleProps, children: '종목별 시상안내'},
	},
	uls: [
		{
			listStyle: 'title',
			items: [
				{
					title: {...ulsTitleProps, children: '대회명'},
					content: {
						...ulsContentProps,
						children: '제19회 화순고인돌마라톤대회',
						fontWeight: fontWeight.bold,
					},
				},
				{
					title: {...ulsTitleProps, children: '일시'},
					content: {
						...ulsContentProps,
						children: '2022년 11월 6일(일) 08:30~13:30(5시간)',
					},
				},
				{
					title: {...ulsTitleProps, children: '접수마감'},
					content: {
						...ulsContentProps,
						children: '2022년 10월 24일(월) 18:00까지',
					},
				},
				{
					title: {...ulsTitleProps, children: '장소'},
					content: {
						...ulsContentProps,
						children: '화순군 공설운동장',
					},
				},
				{
					title: {...ulsTitleProps, children: '종목'},
					content: {
						...ulsContentProps,
						children: '3개 종목(하프코스, 10km, 5km)',
					},
				},
				{
					title: {...ulsTitleProps, children: '참가비'},
					content: {
						...ulsContentProps,
						children: `- 하프코스(30,000원)\n- 10km코스(30,000원)\n- 5km코스(10,000원)`,
					},
				},
				{
					title: {...ulsTitleProps, children: '참가자격'},
					contents: [
						{
							...ulsContentProps,
							children: '나이제한 없으며, 신체 건강한 남/여',
						},
						{
							...ulsContentProps,
							children: `대한육상경기연맹 등록선수 및 선수등록 말소 후\n2년 경과되지 않은 자는 참가할 수 없습니다.`,
						},
					],
				},
				{
					title: {...ulsTitleProps, children: '문의'},
					content: {
						...ulsContentProps,
						children: `사무국연락처 : 061-921-6600, 팩스 : 061-921-9906\n사무국 운영시간/09:00~18:00(월~금), 점심시간/12:00~13:00`,
					},
				},
				{
					title: {...ulsTitleProps, children: '주최'},
					content: {...ulsContentProps, children: '화순군 체육회'},
				},
				{
					title: {...ulsTitleProps, children: '주관'},
					content: {
						...ulsContentProps,
						children: 'KBC광주방송, 화순군육상연합회',
					},
				},
				{
					title: {...ulsTitleProps, children: '후원'},
					content: {...ulsContentProps, children: '전라남도, 화순군'},
				},
			],
		},
	],
};

export const way = {
	title: {
		text: {...cardTitleProps, children: '신청방법'},
	},
	uls: [
		{
			listStyle: 'title',
			items: [
				{
					title: {...ulsTitleProps, children: '인터넷'},
					content: {
						...ulsContentProps,
						children: 'www.hwasungoindol.com',
						fontWeight: fontWeight.bold,
					},
				},
				{
					title: {...ulsTitleProps, children: '현장접수'},
					content: {
						...ulsContentProps,
						children: `현장접수는 종목별 선착순 30명으로 제한합니다.\n※ 현장접수자는 시상에서 제외됩니다.`,
					},
				},
			],
		},
	],
};

export const feeTextProps = {
	base: {
		fontWeight: fontWeight.medium,
		color: colorPalette.accent,
		fontSize: {desktop: fontSize.xl},
	},
	accent: {
		fontWeight: fontWeight.bold,
		color: colorPalette.accent,
		fontSize: {desktop: fontSize.xl3},
	},
};

export const fee = {
	title: {
		text: {...cardTitleProps, children: '참가비 및 입금계좌'},
	},
	table: {
		scroll: false,
		ths: [
			{...thProps, children: '종목'},
			{...thProps, children: '참가비'},
			{...thProps, children: '입금계좌'},
		],
		trs: [
			[
				{...tdProps, children: '하프코스'},
				{...tdProps, children: '30,000'},
				{
					...tdProps,
					childrens: [
						{...feeTextProps.base, children: '입금은행 : 경남은행'},
						{...feeTextProps.base, children: '예금주: 경남CBS'},
						{...feeTextProps.accent, children: '509-07-0152450'},
					],
					rowSpan: '3',
				},
			],
			[
				{...tdProps, children: '10km'},
				{...tdProps, children: '30,000'},
			],
			[
				{...tdProps, children: '5km'},
				{...tdProps, children: '10,000'},
			],
		],
	},
};

export const mobileFee = {
	title: {
		text: {...cardTitleProps, children: '참가비 및 입금계좌'},
	},
	table: {
		scroll: false,
		ths: [
			{...thProps, children: '종목'},
			{...thProps, children: '참가비'},
		],
		trs: [
			[
				{...tdProps, children: '하프코스'},
				{...tdProps, children: '30,000'},
			],
			[
				{...tdProps, children: '10km'},
				{...tdProps, children: '30,000'},
			],
			[
				{...tdProps, children: '5km'},
				{...tdProps, children: '10,000'},
			],
		],
	},
};

export const mobileDeposit = {
	title: {
		text: {...cardTitleProps, children: '참가비 및 입금계좌'},
	},
	table: {
		scroll: false,
		ths: [{...thProps, children: '입금계좌'}],
		trs: [
			[
				{
					...tdProps,
					childrens: [
						{...feeTextProps.base, children: '입금은행 : 경남은행'},
						{...feeTextProps.base, children: '예금주: 경남CBS'},
						{...feeTextProps.accent, children: '509-07-0152450'},
					],
				},
			],
		],
	},
};

export const refundPolicy = {
	title: {
		text: {...cardTitleProps, children: '환불규정'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'접수 마감 후에는 어떠한 경우에도 환불이 불가능하니 이점 유의하여 주시기 바랍니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `참가취소시 환불 받고자 하는 통장의 정보(은행, 예금주, 계좌번호) 가 필요하오니, 정확한 정보를 자유게시판에\n비밀글로 입력해 주시기 바랍니다.  `,
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `천재지변이나 국가 재난사태(질병, 국가적 재난 등 사회적분위기로 대회 개최가 어렵다고 판단되는 경우,\n구제역이나 AI 발생 등으로 국가적으로 집회 등에 대한 자제 요청이 있을 경우)으로 인한 대회 취소시,\n참가비는 전액 반환되지 않습니다. (단, 준비된 기념품은 택배로 발송됩니다.)`,
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'참가비 환불은 참가 접수기간 중에만 가능하며, 환불신청 방법은 아래와 같습니다. ',
						fontWeight: fontWeight.bold,
					},
				},
			],
		},
		{
			listStyle: 'title',
			items: [
				{
					title: {
						...ulsTitleProps,
						children: '환불 신청 기간',
						type: 'long',
					},
					content: {
						...ulsContentProps,
						children:
							'참가 접수기간 중에만 가능 (참가 접수 마감 후에는 불가능)',
					},
				},
				{
					title: {
						...ulsTitleProps,
						children: '환불 신청방법',
						type: 'long',
					},
					content: {
						...ulsContentProps,
						children: '홈페이지 자유게시판에 비밀글로 직접 신청',
					},
				},
				{
					title: {
						...ulsTitleProps,
						children: '환불액 지급 방법',
						type: 'long',
					},
					content: {
						...ulsContentProps,
						children:
							'개인 계좌를 통한 환불 처리 (환불 신청 후 7일 ~ 10일 소요)',
					},
				},
				{
					title: {
						...ulsTitleProps,
						children: '환불 금액',
						type: 'long',
					},
					content: {
						...ulsContentProps,
						children:
							'참가비의 10%를 제외한 금액 (사무국 운영, 은행 수수료 등 제반 경비)',
					},
				},
			],
		},
	],
};

export const schedule = {
	title: {
		text: {...cardTitleProps, children: '환불규정'},
	},
	table: {
		ths: [
			{...thProps, children: '일자'},
			{...thProps, children: '시간'},
			{...thProps, children: '내용'},
		],
		trs: [
			[
				{...tdProps, children: '2022. 11. 6 (일요일)', rowSpan: '10'},
				{...tdProps, children: '08:00 ~ 08:30'},
				{...tdProps, children: '안내, 식전행사'},
			],
			[
				{...tdProps, children: '08:30'},
				{...tdProps, children: '개회식'},
			],
			[
				{...tdProps, children: '08:50'},
				{...tdProps, children: '준비운동'},
			],
			[
				{...tdProps, children: '08:30'},
				{...tdProps, children: '개회식'},
			],
			[
				{...tdProps, children: '09:00'},
				{...tdProps, children: '하프코스 출발'},
			],
			[
				{...tdProps, children: '09:10'},
				{...tdProps, children: '10km 출발'},
			],
			[
				{...tdProps, children: '09:20'},
				{...tdProps, children: '5km 출발'},
			],
			[
				{...tdProps, children: '10:30'},
				{...tdProps, children: '5km, 10km 시상'},
			],
			[
				{...tdProps, children: '11:20'},
				{...tdProps, children: '하프 시상'},
			],
			[
				{...tdProps, children: '12:00'},
				{...tdProps, children: '대회 종료'},
			],
		],
	},
};
