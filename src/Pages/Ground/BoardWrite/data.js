import { fontSize, colorPalette, fontWeight } from "../../../config"

const firstTextProps = {
    inputsText: {
        fontSize: {
            desktop: fontSize.lg,
        },
        color: colorPalette.secondary,
        fontWeight: fontWeight.medium
    },
    input: {
        fontSize: { desktop: fontSize.lg }, height: '60px'
    },
    description: {
        fontSize: {
            desktop: fontSize.lg,
        },
        color: colorPalette.thText,
        fontWeight: fontWeight.medium
    },

}

export const firstProps = {
    inputs: [
        {
            text: { ...firstTextProps.inputsText, children: '이름' },
            input: {
                placeholder: '이름을 입력해주세요.',
                borderRadius: '0.75rem',
                ...firstTextProps.input
            }
        },
        {
            text: { ...firstTextProps.inputsText, children: '패스워드' },
            input: {
                placeholder: '게시글 수정/삭제 시 필요합니다.',
                borderRadius: '0.75rem',
                ...firstTextProps.input


            }
        },
        {
            text: { ...firstTextProps.inputsText, children: '제목' },
            input: {
                placeholder: '재목을 입력해주세요.',
                borderRadius: '0.75rem',
                ...firstTextProps.input
            }
        },
        {
            text: { ...firstTextProps.inputsText, children: '내용' },
            textarea: {
                placeholder: `이름 :\n입금자명(단체명) :\n종목 :\n계좌번호 :\n환불금액 :\n추가 요청사항 :`,
                borderRadius: '0.75rem',
                fontSize: { desktop: fontSize.lg }
            }
        },
    ],
    listBtn: {
        text: { ...firstTextProps.description, children: '목록' },
        bgColor: colorPalette.white,
        isRounded: true,
        border: `1px solid ${colorPalette.border}`
    },
    writeBtn: {
        text: { ...firstTextProps.description, children: '완료', color: colorPalette.white },
        bgColor: colorPalette.primary,
        isRounded: true,
    },
    fileInput: {
        text: {
            ...firstTextProps.inputsText,
            children: '첨부파일'
        },
        file: {
            text: {
                ...firstTextProps.description,
                children: '파일선택'
            },
        }
    },
    description: {
        ...firstTextProps.description,
        children: '첨부파일 제한 용량은 총 2MB이하입니다. (이미지 사이즈 600*800이하) 용량 초과 파일은 DB에 저장하지 않습니다.'
    }
}