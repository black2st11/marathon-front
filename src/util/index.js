export const setInput = (e, prevState, setFunc) => {
    setFunc({ ...prevState, [e.target.name]: e.target.value })
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
