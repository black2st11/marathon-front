import React from 'react';
import * as S from './style';
import {Text} from '../index';

const FileInput = ({
	text,
	bgColor,
	borderRadius,
	border,
	onChange,
	fileName,
}) => {
	const labelProps = {
		bgColor,
		borderRadius,
		border,
	};

	return (
		<S.Container>
			<S.Label {...labelProps} htmlFor='file'>
				<Text {...text} />
			</S.Label>
			<S.FileInput id='file' type='file' onChange={onChange} />
			{fileName}
		</S.Container>
	);
};

export default FileInput;
