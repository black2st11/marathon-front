import React from 'react';
import {colorPalette} from '../../../config';
import {Container, HiddenRadio, Label} from './style';
import {BsCheckLg} from 'react-icons/bs';
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
			<BsCheckLg
				style={{margin: 'auto 1rem auto auto'}}
				color={
					checked ? colorPalette.primary : colorPalette.placeholder
				}
			/>
		</Container>
	);
};

export default Radio;
