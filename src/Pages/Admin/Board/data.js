import { colorPalette } from "../../../config";

export const boardProps = {
    select: {
        options: [
            { value: '공지', name: '공지' },
            { value: '자유', name: '자유' },
            { value: '환불', name: '환불' },
            { value: '사진', name: '사진' },
            { value: '홍보', name: '홍보' }]
    },
    search: {
        input: {},
        button: {
            text: {
                children: '검색',
                color: colorPalette.white
            }
        }
    },
    items: {
        titles: [
            {
                text: { children: '번호' }
            },
            {
                text: { children: '제목' },
                flex: 5
            },
            {
                text: { children: '등록일' }
            },
            {
                text: { children: '조회' }
            }
        ],
        contents: [
            {
                no: '15',
                title: '제 16회 여수 해양마라톤 접수 시작! ',
                date: '2022-06-21',
                hit: '조회'
            },
            {
                no: '15',
                title: '제 16회 여수 해양마라톤 접수 시작! ',
                date: '2022-06-21',
                hit: '조회'
            }
        ],
    },
    button: {
        text: {
            children: '선택',
            color: colorPalette.white
        }
    }
}