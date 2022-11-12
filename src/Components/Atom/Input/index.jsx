import React from 'react';
import {Container, Input as StyledInput} from './style';
import {defaultSize} from '../../../config';
import {passValue} from '../../../util/validator';

const Input = React.forwardRef(
	(
		{
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
			isMax,
		},
		ref,
	) => {
		const inputProps = {
			name,
			value,
			placeholder,
			fontSize,
			onChange: (e) => {
				if (
					maxlength <= value.length &&
					e.target.value.length > maxlength
				) {
					isMax(true);
					return;
				}

				if (e.target.value.length === maxlength) {
					isMax(true);
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
				<StyledInput {...inputProps} ref={ref} />
			</Container>
		);
	},
);

export default Input;
