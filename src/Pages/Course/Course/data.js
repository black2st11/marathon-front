import { cardTitleProps, tdProps, thProps, tableDescriptionProps } from "../../common";
import { courseImg } from '../../../config/images'
import { colorPalette } from "../../../config";

export const imageProps = {
    src: courseImg,
    alt: '코스',
    borderRadius: '1.375rem',
    border: `1px solid ${colorPalette.border}`
}

export const limitTime = {
    title: {
        text: { children: '종목별 시상안내', ...cardTitleProps }
    },
    table: {
        ths: [
            { ...thProps, children: '종목' },
            { ...thProps, children: '출발시간' },
            { ...thProps, children: '경기종료' },
            { ...thProps, children: '비고' }
        ],
        trs: [
            [
                { ...tdProps, children: '하프코스' },
                { ...tdProps, children: '09:00' },
                { ...tdProps, children: '12:00' },
                { ...tdProps, children: '3시간' },
            ],
            [
                { ...tdProps, children: '10km' },
                { ...tdProps, children: '09:10' },
                { ...tdProps, children: '11:10' },
                { ...tdProps, children: '2시간' },
            ],
            [
                { ...tdProps, children: '5km' },
                { ...tdProps, children: '09:20' },
                { ...tdProps, children: '10:20' },
                { ...tdProps, children: '1시간' },
            ],

        ],
        descriptions: [{
            content: { ...tableDescriptionProps, children: `제한 시간이 넘었음에도 불구하고 주최 측 회송차량 승차를 거부한 채 계속 주행하던 도중에 발생하는 사고에 대한 모든 책임은 참가자 본인에게 있으며, 주최 측은 책임을 지지 않습니다.` }
        }]
    }
}