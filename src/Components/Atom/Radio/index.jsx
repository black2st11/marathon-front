import React from 'react';
import {colorPalette} from '../../../config';
import {Container, HiddenRadio, Label} from './style';

const Radio = ({
	children,
	border,
	name,
	color,
	onChange,
	checked,
	value,
	Icon,
}) => {
	let fakeProps = {
		target: {
			name,
			value,
		},
	};
	return (
		<Container
			onClick={(e) => {
				onChange(fakeProps);
			}}
			checked={checked}
			border={border}
		>
			<HiddenRadio
				name={name}
				value={value}
				type='radio'
				onChange={(e) => onChange(e)}
				checked={checked}
			/>
			<Label>{children}</Label>
			{Icon && (
				<Icon
					stroke={
						checked
							? colorPalette.primary
							: colorPalette.placeholder
					}
				/>
			)}
		</Container>
	);
};

export default Radio;
