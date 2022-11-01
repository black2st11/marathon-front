// validator
export const defaultValidator = (text = '') => {
    if (text.length == 0) {
        return { invalid: true, message: '빈칸으로 입력되었습니다.' }
    }
    return { invalid: false, message: '' }
}

export const letterValidator = (text = '') => {
    console.log(text)
    if (text.match(/^[a-z|A-Z|ㄱ-ㅎ|가-힣]+$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '형식이 올바르지않습니다.' }
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

export const isValidate = (state) => {
    for (let [key, value] of Object.entries(state)) {
        let result = { invalid: false }
        switch (key) {
            case 'name':
                result = letterValidator(value)
        }
        if (result.invalid) {
            console.log(`invalid ${key}`)
            return
        }
    }
}

// 입력 안되게 막는 함수들
export const onlyNumber = /[^0-9.]/g
export const onlyLetter = /[^a-zA-Zㄱ-ㅎ가-힣]/g

export const passValue = (text = '', pattern) => {
    console.log(text.replace(pattern, ''))
    return text.replace(pattern, '')
}