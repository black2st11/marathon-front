import {fontSize, fontWeight, colorPalette} from '../config';

export const cardTitleProps = {
	fontSize: {desktop: fontSize.xl3, mobile: fontSize.xl2},
	fontWeight: fontWeight.medium,
	color: colorPalette.black,
	fontFamily: 'Gmarket',
};

export const subTitleProps = {
	fontSize: {desktop: fontSize.xl2, mobile: fontSize.xl2},
	fontWeight: fontWeight.medium,
	color: colorPalette.primary,
};

export const ulsContentProps = {
	fontSize: {desktop: fontSize.lg, mobile: fontSize.base},
	fontWeight: fontWeight.normal,
	color: colorPalette.base,
};

export const ulsTitleProps = {
	fontSize: {desktop: fontSize.lg, mobile: fontSize.base},
	fontWeight: fontWeight.normal,
	color: colorPalette.white,
};

export const thProps = {
	fontSize: {desktop: fontSize.lg},
	fontWeight: fontWeight.normal,
	color: colorPalette.base,
};

export const tdProps = {
	fontSize: {desktop: fontSize.lg},
	fontWeight: fontWeight.normal,
	color: colorPalette.base,
};

export const tableDescriptionProps = {
	fontSize: {desktop: fontSize.lg},
	fontWeight: fontWeight.normal,
	color: colorPalette.base,
};

export const inputTextProps = {
	fontSize: {desktop: fontSize.xl, tablet: fontSize.xl, mobile: fontSize.lg},
	fontWeight: fontWeight.medium,
	color: colorPalette.black,
	fontFamily: 'Gmarket',
};

export const inputEnglishTextProps = {
	fontSize: {desktop: '18px'},
	fontWeight: fontWeight.medium,
	color: colorPalette.placeholder,
};

export const formButtonProps = {
	color: colorPalette.white,
	fontWeight: fontWeight.medium,
	fontSize: {
		desktop: fontSize.xl2,
		tablet: fontSize.xl2,
		mobile: fontSize.lg,
	},
};

export const inputButtonProps = {
	color: colorPalette.white,
	fontWeight: fontWeight.medium,
	fontSize: {
		desktop: fontSize.base,
	},
};

export const groupThProps = {
	fontSize: {desktop: fontSize.xl},
	fontWeight: fontWeight.normal,
	color: colorPalette.thText,
	category: 'text',
};

export const warnText = {
	fontSize: {
		desktop: fontSize.sm,
	},
	color: colorPalette.invalid,
	fontWeight: fontWeight.normal,
};

export const feeTableProps = {
	display: {
		desktop: 'flex',
		tablet: 'none',
		mobile: 'flex',
	},
	items: [
		[
			{
				title: {children: '총참가비'},
				content: {children: '30,000원'},
				key: 'fee',
			},
			{
				title: {children: '입금확인'},
				content: {children: '미입금'},
				key: 'is_deposit',
			},
		],
		[
			{
				title: {children: '입금계좌'},
				contents: [
					{
						children: '입금은행 : 농협 000-0000-000-0000',
					},
					{children: '(예금주: 주최)'},
					{
						children:
							'하프코스 부문: 30,000원 /10km 코스 부문: 30,000원/ 5km 코스 부문: 10,000원',
					},
				],
			},
		],
	],
};

export const tabletFeeTableProps = {
	display: {
		desktop: 'none',
		tablet: 'flex',
		mobile: 'none',
	},
	items: [
		[
			{
				title: {children: '총참가비'},
				content: {children: '30,000원'},
				key: 'fee',
			},
			{
				title: {children: '입금확인'},
				content: {children: '미입금'},
				key: 'is_deposit',
			},
		],
	],
};
