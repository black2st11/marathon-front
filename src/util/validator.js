export const defaultValidator = (text = '') => {
    if (text.length == 0) {
        return { invalid: true, message: '빈칸으로 입력되었습니다.' }
    }
    return { invalid: false, message: '' }
}

export const EmailValidator = (text = '') => {
    if (text.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '이메일 형식이 올바르지않습니다.' }
}

export const ContactValidator = (text = '') => {
    if (text.match(/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '연락처 형식이 올바르지않습니다.' }
}