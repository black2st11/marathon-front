import { requiredInfo } from "../config"

// validator
export const defaultValidator = (text = '', required) => {
    if (text.length == 0 && required) {
        return { invalid: true, message: '빈칸으로 입력되었습니다.' }
    }
    return { invalid: false, message: '' }
}

export const letterValidator = (text = '') => {
    let res = defaultValidator(text, true)
    if (res.invalid) {
        return res
    }

    if (text.length == 0) {
        return { invalid: true, message: '빈칸으로 입력되었습니다.' }
    }

    if (text.match(/^[a-z|A-Z|ㄱ-ㅎ|가-힣]+$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '형식이 올바르지않습니다.' }
}

export const EmailValidator = (text = '') => {
    if (!text) {
        return { invalid: false, message: '' }
    }
    if (text.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '이메일 형식이 올바르지않습니다.' }
}

export const FirstPhoneValidator = (text = '') => {
    let res = defaultValidator(text, true)
    if (res.invalid) {
        return res
    }

    if (text.match(/^[0-9]{3}$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '연락처 형식이 올바르지않습니다.' }
}

export const SecondPhoneValidator = (text = '') => {
    let res = defaultValidator(text, true)
    if (res.invalid) {
        return res
    }
    if (text.match(/^[0-9]{3,4}$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '연락처 형식이 올바르지않습니다.' }
}

export const ThirdPhoneValidator = (text = '') => {
    let res = defaultValidator(text, true)
    if (res.invalid) {
        return res
    }
    if (text.match(/^[0-9]{4}$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '연락처 형식이 올바르지않습니다.' }
}

export const ContactValidator = (text = '') => {
    let res = defaultValidator(text, true)
    if (res.invalid) {
        return res
    }
    if (text.match(/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/)) {
        return { invalid: false, message: '' }
    }
    return { invalid: true, message: '연락처 형식이 올바르지않습니다.' }
}

export const isValidate = (state, invalidProps, setFunc) => {
    let flag = true
    for (let [key, value] of Object.entries(state)) {
        let result = { invalid: false }
        switch (key) {
            case 'name':
                result = letterValidator(value)
                break
            case 'representative_name':
                result = letterValidator(value)
                break
            case 'group_name':
                result = letterValidator(value)
                break
            case 'phone1':
                result = FirstPhoneValidator(value)
                key = 'phone'
                break
            case 'phone2':
                result = SecondPhoneValidator(value)
                key = 'phone'
                break
            case 'phone3':
                result = ThirdPhoneValidator(value)
                key = 'phone'
                break
            case 'email':
                result = EmailValidator(value)
                break
            default:
                if (key == 'year' || key == 'month' || key == 'day') {
                    key = 'birth'
                }
                if (key == 'class' || key == 'grade') {
                    key = 'depart'
                }
                console.log(key)
                result = defaultValidator(value, requiredInfo[key].required)
                break
        }
        if (result.invalid) {
            flag = false
            invalidProps = {
                ...invalidProps,
                [key]: result.message
            }
        }
    }
    console.log(invalidProps)
    setFunc(invalidProps)
    return flag
}

// 입력 안되게 막는 함수들
export const onlyNumber = /[^0-9.]/g
export const onlyLetter = /[^a-zA-Zㄱ-ㅎ가-힣]/g

export const passValue = (text = '', pattern) => {
    return text.replace(pattern, '')
}