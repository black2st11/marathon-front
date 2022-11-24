import React from 'react';

import {Container, Span, P, H1, H2, H3} from './style';

const TextGenerate = ({
	children,
	fontSize,
	color,
	fontWeight,
	type,
	opacity,
	shadow,
}) => {
	const textProps = {
		fontSize,
		color,
		fontWeight,
		opacity,
		shadow,
	};

	switch (type) {
		case 'h1':
			return <H1 {...textProps}>{children}</H1>;
		case 'h2':
			return <H2 {...textProps}>{children}</H2>;
		case 'h3':
			return <H3 {...textProps}>{children}</H3>;
		case 'p':
			return <P {...textProps}>{children}</P>;
		default:
			return <Span {...textProps}>{children}</Span>;
	}
};

const Text = ({
	children,
	fontSize,
	color,
	fontWeight,
	type = 'span',
	opacity,
	shadow,
}) => {
	const textProps = {
		fontSize,
		color,
		fontWeight,
		children,
		type,
		opacity,
		shadow,
	};
	return <TextGenerate {...textProps} />;
};

export default Text;
