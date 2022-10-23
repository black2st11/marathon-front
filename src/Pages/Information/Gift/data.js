import { colorPalette } from "../../../config";
import { giftImg } from "../../../config/images";
import { ulsContentProps } from "../../common";


export const imageProps = {
    src: giftImg,
    alt: '기념품',
}

export const imageDescription = {
    items: [
        { content: { ...ulsContentProps, children: '색상은 랜덤으로 제공됩니다.' } },
        { content: { ...ulsContentProps, children: '기념품은 사전 발송 없이 현장 참석자들에게만 완주 후 지급합니다.(추후 발송도 없음)' } }
    ]
}