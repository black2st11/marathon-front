import {fontSize, fontWeight, colorPalette} from '../../../config';

const firstTextProps = {
	title: {
		fontSize: {
			desktop: fontSize.xl5,
		},
		fontWeight: fontWeight.bold,
		color: colorPalette.black,
	},
	date: {
		fontSize: {
			desktop: fontSize.lg,
		},
		fontWeight: fontWeight.normal,
		color: colorPalette.divider,
	},
	content: {
		fontSize: {
			desktop: fontSize.lg,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.black,
	},

	button: {
		fontSize: {
			desktop: fontSize.base,
		},
		fontWeight: fontWeight.medium,
		color: colorPalette.white,
	},
};

export const firstProps = {
	title: {
		...firstTextProps.title,
		children: '제 16회 여수 해양마라톤 접수 시작! ',
	},
	author: {
		...firstTextProps.content,
		children: '',
	},
	date: {...firstTextProps.date, children: '2022 - 00 -00'},
	content: {
		...firstTextProps.content,
		children: 'asdhfkjlashdklfjhaskljdfklasj',
	},
	comments: [
		{
			title: {
				children: '관리자',
			},
			content: {
				children: `안녕하세요 고객님!
    
        문의 하신 상품 주문건 반품 접수 도와드렸습니다.
        받으신 상품은 대한통운 택배사를 통해 회수 신청 해드렸으며 기사님께 제품만 잘 전달 부탁드립니다.
        반품절차는 다음과 같습니다.
        
        1)신청방법
        -자사 홈페이지 내 1:1문의 게시판 또는 고객센터(1877-8170)
        2)접수 선택사항:
        -계좌이체 또는 차감환불(신청 후 결제 방법에 따라 차감) 가능`,
			},
		},
	],
	listBtn: {
		text: {...firstTextProps.button, children: '목록'},
		bgColor: colorPalette.primary,
		isRounded: true,
	},
};

export const initialState = {
	title: '',
	content: '',
	author: '',
	hit: '',
	created: '',
	comments: [],
};
