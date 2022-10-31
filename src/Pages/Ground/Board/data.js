import { fontSize, fontWeight, colorPalette } from "../../../config"

const firstTextProps = {
    title: {
        fontSize: {
            desktop: fontSize.xl5
        },
        fontWeight: fontWeight.bold,
        color: colorPalette.black
    },
    date: {
        fontSize: {
            desktop: fontSize.lg
        },
        fontWeight: fontWeight.normal,
        color: colorPalette.divider
    },
    content: {
        fontSize: {
            desktop: fontSize.lg
        },
        fontWeight: fontWeight.medium,
        color: colorPalette.black
    },
    button: {
        fontSize: {
            desktop: fontSize.base,
        },
        fontWeight: fontWeight.medium,
        color: colorPalette.white
    }
}

export const firstProps = {
    title: { ...firstTextProps.title, children: '제 16회 여수 해양마라톤 접수 시작! ' },
    date: { ...firstTextProps.date, children: '2022 - 00 -00' },
    content: { ...firstTextProps.content, children: 'asdhfkjlashdklfjhaskljdfklasj' },
    listBtn: {
        text: { ...firstTextProps.button, children: '목록' },
        bgColor: colorPalette.primary,
        isRounded: true,
    }
}