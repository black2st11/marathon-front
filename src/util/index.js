import { cloneDeep } from 'lodash'
import { colorPalette, fontWeight, fontSize } from '../config';
export const cloneObject = (obj) => {
    var clone = {};
    for (var key in obj) {
        if (typeof obj[key] == "object" && obj[key] != null) {
            clone[key] = cloneObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}
export const setInput = (e, prevState, setFunc) => {
    setFunc({ ...prevState, [e.target.name]: e.target.value })
}

export const setGroupInput = (e, index, prevState, setFunc) => {
    let prevGroup = [...prevState]
    prevGroup[index][e.target.name] = e.target.value
    setFunc(prevGroup)
}

export const setInputs = (e, prevState, setFunc) => {

}

export const setRadio = (e, prevState, setFunc) => {
    setFunc({
        ...prevState,
        [e.target.name]: e.target.value
    })
}

export const setSelect = (e, prevState, setFunc) => {
    setFunc({
        ...prevState,
        [e.target.name]: e.target.value
    })
}

export const setGroupCheck = (e, index, prevState, setFunc) => {
    let prevGroup = [...prevState]
    prevGroup[index][e.target.name] = e.target.value
    setFunc(prevGroup)
}

export const setAddGroup = (prevState, setFunc) => {
    let prevGroup = [...prevState]
    prevGroup.push({
        check: false,
        name: '',
        gender: '',
        birth: '',
        phone1: '',
        phone2: '',
        phone3: '',
        course: '',
        gift: '',
    })
    setFunc(prevGroup)
}

export const setGroupSelect = (e, index, prevState, setFunc) => {
    let prevGroup = [...prevState]
    prevGroup[index][e.target.name] = e.target.value
    setFunc(prevGroup)
}

export const setIndividualDelete = (index, prevState, setFunc) => {
    let prevGroup = [...prevState]
    prevGroup.splice(index, 1)
    setFunc(prevGroup)
}

export const setGroupDelete = (prevState = [], setFunc) => {
    let checkedList = []
    prevState.map((state, index, array) => {
        if (state.check) {
            checkedList.push(index)
        }
    })
    let prevGroup = [...prevState]
    while (checkedList.length != 0) {
        let deleteIdx = checkedList.pop()
        prevGroup.splice(deleteIdx, 1)
    }
    setFunc(prevGroup)
}

export const setAllCheck = (prevState = [], setFunc) => {
    let prevGroup = [...prevState]
    prevGroup.forEach(state => {
        state.check = true
    })
    setFunc(prevGroup)
}

export const setToggleCheck = (prevState = [], setFunc, anotherFunc) => {
    let prevGroup = [...prevState]
    let defaultCheck = true
    prevGroup.forEach(state => {
        defaultCheck = defaultCheck && state.check
    })
    prevGroup.forEach(state => {
        state.check = !defaultCheck
    })
    anotherFunc(!defaultCheck)
    setFunc(prevGroup)
}

export const setForm = (props, prevState, setFunc) => {
    if (props.input) {
        props.input.onChange = (e) => setInput(e, prevState, setFunc)
        props.input.value = prevState[props.input.name]
    }

    if (props.inputs) {
        props.inputs.forEach(input => {
            input.onChange = (e) => setInput(e, prevState, setFunc)
            input.value = prevState[input.name]
        })
    }

    // radio
    if (props.items) {
        props.onChange = (e) => setRadio(e, prevState, setFunc)
        props.value = prevState[props.name]
    }

    if (props.selects) {
        props.selects.forEach(select => {
            select.onChange = (e) => setSelect(e, prevState, setFunc)
            select.value = prevState[select.name]
        })
    }
}

export const groupNameProps = {
    input: { value: '', name: 'name', borderRadius: '0.25rem', border: 'none', onChange: () => console.log(1), height: '40px' }
}

export const checkProps = {
    check: { onChange: () => console.log(1), borderRadius: '0.3rem', name: 'check' }
}

export const genderProps = {
    select: { options: [{ value: '남성', name: '남성' }, { value: '여성', name: '여성' }], name: 'gender', height: '40px', borderRadius: '5px', border: 'none' },
}

export const birthProps = {
    input: { value: '', borderRadius: '0.25rem', border: 'none', name: 'birth', onChange: () => console.log(1), height: '40px' }
}

export const courseProps = {
    select: { name: 'course', options: [{ value: '10km', name: '10km' }, { value: '5km', name: '5km' }, { value: '하프', name: '하프코스' }], height: '40px', borderRadius: '5px', border: 'none' },
}

export const contactProps = {
    inputs: [
        { value: '', onChange: () => console.log(1), height: '40px', name: 'phone1' },
        { value: '', onChange: () => console.log(1), height: '40px', name: 'phone2' },
        { value: '', onChange: () => console.log(1), height: '40px', name: 'phone3' }
    ]
}

export const btnProps = {
    button: {
        text: {
            children: '삭제',
            color: colorPalette.white,
            fontSize: { desktop: fontSize.xl },
            fontWeight: fontWeight.medium
        },
        height: '2.125rem',
        isRounded: true,
    },
}

export const giftProps = {
    select: { name: 'gift', options: [{ value: '10km', name: '10km' }, { value: '5km', name: '5km' }, { value: '하프', name: '하프코스' }], height: '40px', borderRadius: '5px', border: 'none' },
}

export const setGroupForm = (prevStates = [], setFunc) => {
    let groupForms = []

    prevStates.forEach((state, index, array) => {
        let tempList = []
        for (const [key, value] of Object.entries(state)) {

            if (key === 'check') {
                let props = cloneDeep(checkProps)
                props.check.onChange = (e) => setGroupCheck(e, index, prevStates, setFunc)
                props.check.value = value
                tempList.push(props)
            }

            if (key === 'name') {
                let props = cloneDeep(groupNameProps)
                props.input.onChange = (e) => setGroupInput(e, index, prevStates, setFunc)
                props.input.value = value
                tempList.push(props)
            }

            if (key === 'gender') {
                let props = cloneDeep(genderProps)
                props.select.onChange = (e) => setGroupSelect(e, index, prevStates, setFunc)
                props.value = value
                tempList.push(props)
            }

            if (key === 'birth') {
                let props = cloneDeep(birthProps)
                props.input.onChange = (e) => setGroupInput(e, index, prevStates, setFunc)
                props.input.value = value
                tempList.push(props)
            }

            if (key === 'phone1') {
                let props = cloneDeep(contactProps)
                props.inputs[0].onChange = (e) => setGroupInput(e, index, prevStates, setFunc)
                props.inputs[1].onChange = (e) => setGroupInput(e, index, prevStates, setFunc)
                props.inputs[2].onChange = (e) => setGroupInput(e, index, prevStates, setFunc)
                props.inputs[0].value = prevStates[index][props.inputs[0].name]
                props.inputs[1].value = prevStates[index][props.inputs[1].name]
                props.inputs[2].value = prevStates[index][props.inputs[2].name]
                tempList.push(props)
            }

            if (key === 'course') {
                let props = cloneDeep(courseProps)
                props.select.onChange = (e) => setGroupSelect(e, index, prevStates, setFunc)
                props.select.value = value
                tempList.push(props)
            }

            if (key === 'gift') {
                let props = cloneDeep(giftProps)
                props.select.onChange = (e) => setGroupSelect(e, index, prevStates, setFunc)
                props.select.value = value
                tempList.push(props)
            }
        }
        let props = cloneDeep(btnProps)
        props.button.onClick = (e) => setIndividualDelete(index, prevStates, setFunc)
        tempList.push(props)
        groupForms.push(tempList)
    })
    return groupForms
}