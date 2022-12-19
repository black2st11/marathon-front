import {
	cardTitleProps,
	ulsContentProps,
	ulsTitleProps,
	subTitleProps,
	thProps,
	tdProps,
} from '../../common';
import {colorPalette, fontWeight} from '../../../config';

export const qualification = {
	title: {
		text: {...cardTitleProps, children: '참가 자격'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children: '나이제한 없으며, 신체 건강한 남 / 여',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'대한육상경기연맹 등록선수 및 선수등록 말소 후 2년 경과되지 않은 자는 참가할 수 없습니다.',
					},
				},
			],
		},
	],
};

export const reception = {
	title: {
		text: {...cardTitleProps, children: '현장 접수'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'현장접수는 종목별 선착순 30명으로 제한합니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '현장접수자는 시상에서 제외됩니다.',
					},
				},
			],
		},
	],
};

export const health = {
	title: {
		text: {...cardTitleProps, children: '참가자 건강 유의사항'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'참가자는 반드시 본인의 건강상태를 고려하여 참가신청을 하시기 바랍니다',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `주최 측은 경기 중 발생한 부상, 사고 등에 있어 주최 측의 고의나 과실로 인하지 않은 참가자의 과실이나 부주의에 의한 사고,\n부상 등은 응급조치 이외의 책임을 지지 않습니다. `,
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `참가자 본인의 지병 등으로 인한 사고는 주최 측에서 일체 책임지지 않음으로, 반드시 본인의 건강상태를 확인하기 바랍니다.\n(참가자는 의료기관의 진료를 통해, 무리없이 달릴 수 있는 지의 여부를 스스로 결정한 뒤 참가 신청해 주시기 바랍니다.) `,
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `주최 측은 부상, 사고 등을 대비하여 참가자를 위해 상해보험(행사 단체보험)에 가입하며, 각종 안전사고에 대비한\n시설물과 안전요원을 배치합니다. 또한, 만일의 사고 발생시 응급조치와 긴급후송을 위한 구급차 등의 응급시스템을 준비합니다. `,
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `참가자는 레이스 도중 이상을 느낄 경우 레이스를 중지하고, 회송차나 구급차를 이용해야 합니다. `,
					},
				},
			],
		},
	],
};

export const fail = {
	title: {
		text: {...cardTitleProps, children: '참가자격 박탈 및 실격'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'번호표 혹은 기록측정용 칩을 착용하지 않았을 경우',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '임의로 코스를 바꾸거나 대리 참가할 경우',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '칩을 복수 착용할 경우',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'출발점 혹은 반환점의 매트를 밟지 않고 주로를 이탈해서 완주했을 경우',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'레이스 도중 다른 사람으로부터 도움을 받았을 경우',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '기타 부정행위라고 판달 될 경우',
					},
				},
			],
		},
	],
};

export const provide = {
	title: {
		text: {...cardTitleProps, children: '참가자 제공품'},
	},
	subTitle: {
		text: {...subTitleProps, children: '대회전'},
		border: `1px solid ${colorPalette.primary}`,
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children: '기념품, 배번호, 안내책자',
					},
				},
			],
		},
		{
			listStyle: 'title',
			items: [
				{
					title: {...ulsTitleProps, children: '하프/10km'},
					content: {
						...ulsContentProps,
						children:
							'기념품, 배번호, 기록칩(배번호 내에 내장되어 있음), 안내책자',
					},
				},
				{
					title: {...ulsTitleProps, children: '5km'},
					content: {
						...ulsContentProps,
						children: '기념품, 배번호, 안내책자',
					},
				},
			],
		},
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'번호표 분실 또는 미지참시 대회장에서 재발급이 불가능합니다. 현장 접수로 다시 구매하셔야 합니다.',
						color: colorPalette.warn,
						fontWeight: fontWeight.semiBold,
					},
				},
			],
		},
	],
};

export const onGoing = {
	subTitle: {
		text: {...subTitleProps, children: '대회중'},
		border: `1px solid ${colorPalette.primary}`,
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children: '주로 및 대회장 내 지급품 안내해드립니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '급수대는 매 2.5km 간격으로 배치됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '급수대에서는 물과 간식 등이 제공됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '골인 후, 기록증과 간식이 제공됩니다.',
					},
				},
			],
		},
	],
};

export const after = {
	subTitle: {
		text: {...subTitleProps, children: '대회 후'},
		border: `1px solid ${colorPalette.primary}`,
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children: '골인지점 촬영 사진 제공',
					},
				},
			],
		},
	],
};

export const control = {
	title: {
		text: {...cardTitleProps, children: '교통통제 및 경기시간 제한'},
	},
	table: {
		ths: [
			{...thProps, children: '종목'},
			{...thProps, children: '출발시간'},
			{...thProps, children: '경기종료'},
			{...thProps, children: '비고'},
		],
		trs: [
			[
				{...tdProps, children: '하프코스'},
				{...tdProps, children: '09:00'},
				{...tdProps, children: '12:00'},
				{...tdProps, children: '3시간'},
			],
			[
				{...tdProps, children: '10km'},
				{...tdProps, children: '09:10'},
				{...tdProps, children: '11:10'},
				{...tdProps, children: '2시간'},
			],
			[
				{...tdProps, children: '5km'},
				{...tdProps, children: '09:20'},
				{...tdProps, children: '10:20'},
				{...tdProps, children: '1시간'},
			],
		],
		descriptions: [
			{
				content: {
					children: `제한 시간이 넘었음에도 불구하고 주최 측 회송차량 승차를 거부한 채 계속 주행하던 도중에 발생하는 사고에 대한 모든 책임은 참가자 본인에게 있으며, 주최 측은 책임을 지지 않습니다.`,
				},
			},
		],
	},
};

export const emergency = {
	title: {
		text: {...cardTitleProps, children: '응급조치 및 의료 계획'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children: '본부에는 의료센터가 마련됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: '구급차는 주로에 1대가 배치됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'약 20명 내외의 레이스패트롤과 페이스메이커(환자 발견시 즉시 레이스패트롤로 임무 전환)가 함께 달리게 됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `교통통제시간이 지나면 안전 사고에 대비하여 참가자는 레이스를 중지하고 진행요원의 지시에 따라 회송차에 승차해 주시기 바랍니다.\n안전사고에 대비를 위한 조치이니 꼭 지켜주시기 바랍니다.`,
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'레이스 도중 호흡곤란이 생기거나 몸에 이상이 발생했을 때에는 부근의 진행요원에게 알려 지시를 받으십시오.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'공식 의무원 또는 심판으로부터 레이스 중지 명령을 받았을 때에는 그 지시에 따라야 합니다.',
					},
				},
			],
		},
	],
};

export const privacy = {
	title: {
		text: {...cardTitleProps, children: '개인정보 관리'},
	},
	uls: [
		{
			listStyle: 'circle',
			items: [
				{
					content: {
						...ulsContentProps,
						children:
							'참가 신청자의 보다 나은 서비스 제공을 위해 개인 정보를 보험사, 대회 협력사와 공유할 수 있습니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'차기 대회 홍보시 문자메시지 발송용으로 활용됩니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children:
							'그 외 다른 영리적인 목적으로 개인정보를 타인 또는 타 기업, 기관에 공개하지 않습니다.',
					},
				},
				{
					content: {
						...ulsContentProps,
						children: `다만, 신청자가 참가 유의사항 및 이용약관을 위배한 사람인 경우, 타인에게 법적인 피해를 주는 경우 혹은 미풍양속을 해치는 행위를 한 경우 등은\n법적인 조치를 취하기 위해 개인정보를 공개할 수 있습니다.`,
					},
				},
			],
		},
	],
};
