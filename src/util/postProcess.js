export const dictToList = ({dict, defaultValue = undefined}) => {
	let list = [];

	for (let [key, value] of Object.entries(dict)) {
		if (value) {
			list.push(key);
		}
	}

	if (defaultValue && list.length === 0) {
		list = defaultValue;
	}

	return defaultValue;
};

export const dictToStr = ({dict, defaultValue = undefined}) => {
	let literal = '';

	for (let [key, value] of Object.entries(dict)) {
		if (value) {
			literal = key;
		}
	}

	if (literal === '' && defaultValue) {
		literal = defaultValue;
	}
	return literal;
};
