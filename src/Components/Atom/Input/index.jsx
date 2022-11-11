import React from 'react';
import {Container, Input as StyledInput} from './style';
import {defaultSize} from '../../../config';
import {passValue} from '../../../util/validator';

const Input = ({
	placeholder,
	name,
	value,
	onChange,
	border,
	borderRadius,
	fontSize = {},
	height = defaultSize.inputHeight,
	onFocusOut,
	maxlength,
	pattern,
}) => {
	const inputProps = {
		name,
		value,
		placeholder,
		fontSize,
		onChange: (e) => {
			console.log(typeof value);
			if (
				maxlength <= value.length &&
				e.target.value.length > maxlength
			) {
				return;
			}
			if (pattern) {
				e.target.value = passValue(e.target.value, pattern);
			}
			onChange(e);
		},
		onBlur: onFocusOut,
		border,
		height,
		borderRadius,
		pattern,
	};

	return (
		<Container>
			<StyledInput {...inputProps} />
		</Container>
	);
};

export default Input;
