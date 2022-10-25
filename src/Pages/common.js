import { fontSize, fontWeight, colorPalette } from '../config'

export const cardTitleProps = {
    fontSize: { desktop: fontSize.xl3, mobile: fontSize.xl2 },
    fontWeight: fontWeight.medium,
    color: colorPalette.black
}

export const subTitleProps = {
    fontSize: { desktop: fontSize.xl2, mobile: fontSize.xl2 },
    fontWeight: fontWeight.medium,
    color: colorPalette.primary
}

export const ulsContentProps = {
    fontSize: { desktop: fontSize.lg, mobile: fontSize.base }, fontWeight: fontWeight.normal, color: colorPalette.base
}

export const ulsTitleProps = {
    fontSize: { desktop: fontSize.lg, mobile: fontSize.base }, fontWeight: fontWeight.normal, color: colorPalette.white
}

export const thProps = {
    fontSize: { desktop: fontSize.lg },
    fontWeight: fontWeight.normal,
    color: colorPalette.base
}

export const tdProps = {
    fontSize: { desktop: fontSize.lg },
    fontWeight: fontWeight.normal,
    color: colorPalette.base
}

export const tableDescriptionProps = {
    fontSize: { desktop: fontSize.lg },
    fontWeight: fontWeight.normal,
    color: colorPalette.base
}

export const inputTextProps = {
    fontSize: { desktop: fontSize.xl, tablet: fontSize.xl, mobile: fontSize.lg },
    fontWeight: fontWeight.medium,
    color: colorPalette.black
}

export const inputEnglishTextProps = {
    fontSize: { desktop: fontSize.lg },
    fontWeight: fontWeight.medium,
    color: colorPalette.placeholder
}

export const formButtonProps = {
    color: colorPalette.white,
    fontWeight: fontWeight.medium,
    fontSize: {
        desktop: fontSize.xl2,
        tablet: fontSize.xl2,
        mobile: fontSize.lg
    }
}

export const inputButtonProps = {
    color: colorPalette.white,
    fontWeight: fontWeight.medium,
    fontSize: {
        desktop: fontSize.base,
    }
}

export const groupThProps = {
    fontSize: { desktop: fontSize.xl, },
    fontWeight: fontWeight.normal,
    color: colorPalette.thText,
    category: 'text'
}