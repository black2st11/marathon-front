import {cloneDeep} from 'lodash';
import {
	colorPalette,
	fontWeight,
	fontSize,
	giftMap,
	courseList,
	participatedList,
} from '../config';
import {onlyLetter, onlyNumber} from './validator';

export const makeGiftByCourse = (name = '') => {
	let gifts = [];
	if (!name) {
		return gifts;
	}
	try {
		giftMap[name].forEach((gift) => {
			gifts.push({
				value: gift,
				name: gift,
			});
		});
	} catch (e) {
		return [];
	}

	return gifts;
};

export const makeCourse = () => {
	let courses = [];
	courseList.forEach((course) => {
		courses.push({
			name: course,
			value: course,
			label: course,
			children: `${course} 부문`,
		});
	});
	return courses;
};

export const cloneObject = (obj) => {
	let clone = {};
	for (let key in obj) {
		if (typeof obj[key] == 'object' && obj[key] != null) {
			clone[key] = cloneObject(obj[key]);
		} else {
			clone[key] = obj[key];
		}
	}
	return clone;
};
export const setInput = (e, prevState, setFunc) => {
	setFunc({...prevState, [e.target.name]: e.target.value});
};

export const setGroupInput = (e, index, prevState, setFunc) => {
	let prevGroup = [...prevState];
	prevGroup[index][e.target.name] = e.target.value;
	setFunc(prevGroup);
};

export const setRadio = (e, prevState, setFunc) => {
	setFunc({
		...prevState,
		[e.target.name]: e.target.value,
	});
};

export const setSelect = (e, prevState, setFunc) => {
	setFunc({
		...prevState,
		[e.target.name]: e.target.value,
	});
};

export const setGroupCheck = (e, index, prevState, setFunc) => {
	let prevGroup = [...prevState];
	prevGroup[index][e.target.name] = e.target.value;
	setFunc(prevGroup);
};

export const setAddGroup = (prevState, setFunc) => {
	let prevGroup = [...prevState];
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
	});
	setFunc(prevGroup);
};

export const setGroupSelect = (e, index, prevState, setFunc) => {
	let prevGroup = [...prevState];
	prevGroup[index][e.target.name] = e.target.value;
	setFunc(prevGroup);
};

export const setIndividualDelete = (index, prevState, setFunc) => {
	let prevGroup = [...prevState];
	prevGroup.splice(index, 1);
	setFunc(prevGroup);
};

export const setGroupDelete = (prevState = [], setFunc) => {
	let checkedList = [];
	prevState.forEach((state, index) => {
		if (state.check) {
			checkedList.push(index);
		}
	});
	let prevGroup = [...prevState];
	while (checkedList.length !== 0) {
		let deleteIdx = checkedList.pop();
		prevGroup.splice(deleteIdx, 1);
	}
	setFunc(prevGroup);
};

export const setAllCheck = (prevState = [], setFunc) => {
	let prevGroup = [...prevState];
	prevGroup.forEach((state) => {
		state.check = true;
	});
	setFunc(prevGroup);
};

export const setToggleCheck = (
	prevState = [],
	setFunc,
	anotherFunc,
	fixValue = undefined,
) => {
	let prevGroup = [...prevState];
	let defaultCheck = true;
	prevGroup.forEach((state) => {
		defaultCheck = defaultCheck && state.check;
	});
	defaultCheck = fixValue !== undefined ? fixValue : !defaultCheck;
	prevGroup.forEach((state) => {
		state.check = defaultCheck;
	});
	if (anotherFunc) {
		anotherFunc(defaultCheck);
	}
	setFunc(prevGroup);
};

export const setForm = (props, prevState, setFunc) => {
	if (props.input) {
		props.input.onChange = (e) => setInput(e, prevState, setFunc);
		props.input.value = prevState[props.input.name];
	}

	if (props.textarea) {
		props.textarea.onChange = (e) => setInput(e, prevState, setFunc);
		props.textarea.value = prevState[props.textarea.name];
	}

	if (props.inputs) {
		props.inputs.forEach((input) => {
			input.onChange = (e) => setInput(e, prevState, setFunc);
			input.value = prevState[input.name];
		});
	}

	// radio
	if (props.items) {
		props.onChange = (e) => {
			if (props.multiple) {
				let temp = prevState[props.name];
				if (!Array.isArray(temp)) {
					temp = [temp];
				}
				if (temp.findIndex((ele) => ele === e.target.value) >= 0) {
					console.log(
						temp.findIndex((ele) => ele === e.target.value),
					);
					temp.splice(
						temp.findIndex((ele) => ele === e.target.value),
						1,
					);
					console.log(temp);
				} else {
					temp.push(e.target.value);
				}
				e.target.value = temp;
			}
			setRadio(e, prevState, setFunc);
		};
		props.value = prevState[props.name];
	}

	if (props.selects) {
		props.selects.forEach((select) => {
			select.onChange = (e) => setSelect(e, prevState, setFunc);
			select.value = prevState[select.name];
			if (props.selects[0].name === 'gift') {
				props.selects[0].options = makeGiftByCourse(prevState.course);
			}
			if (props.selects[0].name === 'course') {
				props.selects[0].options = makeCourse();
			}
		});
	}
};

export const setWarnText = (props, state) => {
	props.warnText.children = state[props.name];
};

export const groupNameProps = {
	input: {
		value: '',
		name: 'name',
		borderRadius: '0.25rem',
		border: 'none',
		onChange: () => console.log(1),
		height: '40px',
		placeholder: '홍길동',
	},
};

export const checkProps = {
	check: {
		onChange: () => console.log(1),
		borderRadius: '0.3rem',
		name: 'check',
	},
};

export const genderProps = {
	select: {
		options: [
			{value: '남성', name: '남성'},
			{value: '여성', name: '여성'},
		],
		name: 'gender',
		height: '40px',
		borderRadius: '5px',
		border: 'none',
	},
};

export const birthProps = {
	input: {
		value: '',
		borderRadius: '0.25rem',
		border: 'none',
		name: 'birth',
		onChange: () => console.log(1),
		height: '40px',
		placeholder: '19600214',
	},
};

export const bibProps = {
	input: {
		value: '',
		borderRadius: '0.25rem',
		border: 'none',
		name: 'bib',
		onChange: () => console.log(1),
		height: '40px',
	},
};

export const courseProps = {
	select: {
		name: 'course',
		options: makeCourse(),
		height: '40px',
		borderRadius: '5px',
		border: 'none',
	},
};

export const contactProps = {
	inputs: [
		{
			value: '',
			onChange: () => console.log(1),
			height: '40px',
			name: 'phone1',
			placeholder: '010',
		},
		{
			value: '',
			onChange: () => console.log(1),
			height: '40px',
			name: 'phone2',
			placeholder: '1111',
		},
		{
			value: '',
			onChange: () => console.log(1),
			height: '40px',
			name: 'phone3',
			placeholder: '2222',
		},
	],
};

export const btnProps = {
	button: {
		text: {
			children: '삭제',
			color: colorPalette.white,
			fontSize: {desktop: fontSize.xl},
			fontWeight: fontWeight.medium,
		},
		height: '2.125rem',
		isRounded: true,
	},
};

export const giftProps = {
	select: {
		name: 'gift',
		options: [],
		height: '40px',
		borderRadius: '5px',
		border: 'none',
	},
};

export const depositProps = {
	select: {
		name: 'is_deposit',
		options: [
			{value: false, name: '미입금'},
			{value: true, name: '입금'},
		],
		height: '40px',
		borderRadius: '5px',
		border: 'none',
	},
};

export const deletedProps = {
	select: {
		name: 'deleted',
		options: [
			{value: null, name: '선택'},
			{value: new Date().toISOString(), name: '삭제'},
		],
		height: '40px',
		borderRadius: '5px',
		border: 'none',
	},
};

export const setGroupForm = (prevStates = [], setFunc, isAdmin = false) => {
	let groupForms = [];

	prevStates.forEach((state, index) => {
		let tempList = [];
		for (const [key, value] of Object.entries(state)) {
			if (key === 'check') {
				let props = cloneDeep(checkProps);
				props.check.onChange = (e) =>
					setGroupCheck(e, index, prevStates, setFunc);
				props.check.value = value;
				tempList.push(props);
			}

			if (key === 'name') {
				let props = cloneDeep(groupNameProps);
				props.input.onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.input.pattern = onlyLetter;
				props.input.value = value;
				tempList.push(props);
			}

			if (key === 'gender') {
				let props = cloneDeep(genderProps);
				props.select.onChange = (e) =>
					setGroupSelect(e, index, prevStates, setFunc);
				props.select.value = value;
				tempList.push(props);
			}

			if (key === 'birth') {
				let props = cloneDeep(birthProps);
				props.input.onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.input.value = value;
				props.input.pattern = onlyNumber;
				tempList.push(props);
			}
			if (key === 'bib' && isAdmin) {
				let props = cloneDeep(bibProps);
				props.input.onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.input.value = value;
				tempList.push(props);
			}

			if (key === 'phone1') {
				let props = cloneDeep(contactProps);
				props.inputs[0].onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.inputs[1].onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.inputs[2].onChange = (e) =>
					setGroupInput(e, index, prevStates, setFunc);
				props.inputs[0].value = prevStates[index][props.inputs[0].name];
				props.inputs[1].value = prevStates[index][props.inputs[1].name];
				props.inputs[2].value = prevStates[index][props.inputs[2].name];
				props.inputs[0].pattern = onlyNumber;
				props.inputs[1].pattern = onlyNumber;
				props.inputs[2].pattern = onlyNumber;
				props.inputs[0].maxlength = 3;
				props.inputs[1].maxlength = 4;
				props.inputs[2].maxlength = 4;
				tempList.push(props);
			}

			if (key === 'course') {
				let props = cloneDeep(courseProps);
				props.select.onChange = (e) =>
					setGroupSelect(e, index, prevStates, setFunc);
				props.select.value = value;
				tempList.push(props);
			}

			if (key === 'gift') {
				let props = cloneDeep(giftProps);
				props.select.onChange = (e) =>
					setGroupSelect(e, index, prevStates, setFunc);
				props.select.options = makeGiftByCourse(
					prevStates[index].course,
				);
				props.select.value = value;
				tempList.push(props);
			}

			if (key === 'is_deposit' && isAdmin) {
				let props = cloneDeep(depositProps);
				props.select.onChange = (e) =>
					setGroupSelect(e, index, prevStates, setFunc);
				props.select.value = value;
				tempList.push(props);
			}

			if (key === 'deleted' && isAdmin) {
				let props = cloneDeep(deletedProps);
				props.select.onChange = (e) =>
					setGroupSelect(e, index, prevStates, setFunc);
				props.select.value = value;
				tempList.push(props);
			}
		}
		if (!isAdmin) {
			let props = cloneDeep(btnProps);
			props.button.onClick = () =>
				setIndividualDelete(index, prevStates, setFunc);
			tempList.push(props);
		}

		groupForms.push(tempList);
	});
	return groupForms;
};

export const makeYear = () => {
	let years = [];
	for (let i = 1900; i <= 2020; i++) {
		years.push({value: `${i}`, name: `${i}`, label: `${i}`});
	}
	return years;
};

export const makeMonth = () => {
	let month = [];
	for (let i = 1; i <= 12; i++) {
		month.push({
			value: `${i}`.padStart(2, '0'),
			name: `${i}`.padStart(2, '0'),
			label: `${i}`.padStart(2, '0'),
		});
	}
	return month;
};

export const makeDay = () => {
	let days = [];
	for (let i = 1; i <= 31; i++) {
		days.push({
			value: `${i}`.padStart(2, '0'),
			name: `${i}`.padStart(2, '0'),
			label: `${i}`.padStart(2, '0'),
		});
	}
	return days;
};

export const makeParticipated = () => {
	let participated = [];
	participatedList.forEach((day) => {
		let splitted_day = day.date.split('-');
		participated.push({
			value: day.date,
			children: `${splitted_day[0]}년 ${splitted_day[1]}월 ${splitted_day[2]}일 ${day.weekday}`,
			name: `${splitted_day[0]}년 ${splitted_day[1]}월 ${splitted_day[2]}일 ${day.weekday}`,
			label: `${splitted_day[0]}년 ${splitted_day[1]}월 ${splitted_day[2]}일 ${day.weekday}`,
		});
	});
	return participated;
};

export const generateGroupParticipation = (participation = []) => {
	let participations = [];
	participation.forEach((item) => {
		let year = item.birth.substring(0, 4);
		let month = item.birth.substring(4, 6);
		let day = item.birth.substring(6, 8);
		participations.push({
			name: item.name,
			gender: item.gender,
			birth: `${year}-${month}-${day}`,
			phone: `${item.phone1}-${item.phone2}-${item.phone3}`,
			course: item.course,
			gift: item.gift,
			deposited: item.deposited,
			created: item.created,
		});
	});
	return participations;
};

export const generateComments = (comments) => {
	let generatedComments = [];

	comments.forEach((comment) => {
		generatedComments.push({
			author: {children: comment.author},
			content: {children: comment.content},
		});
	});
	return generatedComments;
};

export const apiErrorParser = (e) => {
	if (e.response.status === 404) {
		return alert('존재하지 않는 요청입니다. 확인해주세요');
	}
	if (e.response.status === 500) {
		return alert(
			'서버 에러입니다. 지속적으로 발생 시 관리자에게 문의해주세요.',
		);
	}
	let data = e.response.data;
	let errorMessage = ``;
	if (Array.isArray(data)) {
		data.forEach((message) => {
			errorMessage += `${message}\n`;
		});
	} else {
		for (let [key, value] of Object.entries(data)) {
			if (value.length > 1) {
				value.forEach((item) => {
					for (let [k, v] of Object.entries(item)) {
						errorMessage += `${k} : ${v[0]}\n`;
					}
				});
			} else {
				errorMessage += `${key} : ${value[0]}\n`;
			}
		}
	}
	return alert(errorMessage);
};
