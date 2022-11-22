import React from 'react';
import * as S from './style';

const TextArea = ({
	placeholder,
	name,
	value,
	onChange,
	border,
	borderRadius,
	fontSize = {},
	onFocusOut,
	disabled,
	height,
}) => {
	const textareaProps = {
		name,
		value,
		placeholder,
		fontSize,
		onChange: (e) => onChange(e),
		onBlur: onFocusOut,
		border,
		borderRadius,
		disabled,
		height,
	};
	return <S.TextArea {...textareaProps} rows={30} />;
};

export default TextArea;
