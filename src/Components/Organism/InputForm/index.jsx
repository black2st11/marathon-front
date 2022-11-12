import React, {useRef, useEffect} from 'react';
import {
	Container,
	TextWrapper,
	LongTextWrapper,
	InputWrapper,
	NameWrapper,
	EnglishNameWrapper,
	FormWrapper,
	ButtonWrapper,
	Sep,
	InputWithButtonWrapper,
	TextSep,
	RowWrapper,
	WarnWrapper,
} from './style';
import {Input, Text, Button} from '../../Atom';
import {TextForm} from '../index';

const SepGenerate = ({seperate, isLast}) => {
	if (seperate) {
		return (
			<TextSep>
				<Text {...seperate} />
			</TextSep>
		);
	}

	if (!isLast) {
		return <Sep />;
	}
};

const MultipleInput = ({inputs = [], sep}) => {
	const inputsRef = useRef([]);
	useEffect(() => {
		inputs.forEach((input, index) => {
			if (input.value.length >= input.maxlength) {
				inputsRef.current[index].focus();
			}
		});
	}, [inputs]);
	return (
		<React.Fragment>
			{inputs.map((input, index) => (
				<React.Fragment>
					<Input
						{...input}
						ref={(e) => (inputsRef.current[index] = e)}
						isMax={() => inputsRef.current[index + 1]?.focus()}
					/>
					{sep && (
						<SepGenerate
							seperate={input.sep}
							isLast={index === inputs.length - 1}
						/>
					)}
				</React.Fragment>
			))}
		</React.Fragment>
	);
};

const InputGenerate = ({input, button, inputs, sep}) => {
	const inputsProps = {
		inputs,
		sep,
	};
	if (button) {
		return (
			<React.Fragment>
				<InputWithButtonWrapper>
					<Input {...input} />
				</InputWithButtonWrapper>
				<ButtonWrapper>
					<Button {...button} height='46px' />
				</ButtonWrapper>
			</React.Fragment>
		);
	} else if (inputs) {
		return <MultipleInput {...inputsProps} />;
	}
	return <Input {...input} />;
};

const InputForm = ({
	text,
	inputs,
	input,
	sep = false,
	englishText,
	validator,
	required,
	category = 'default',
	button,
	warnText,
}) => {
	const textProps = {
		text,
		englishText,
		category,
	};

	const inputProps = {
		inputs,
		input,
		sep,
		button,
	};

	return (
		<Container>
			<RowWrapper>
				<TextWrapper>{text && <TextForm {...textProps} />}</TextWrapper>
				<FormWrapper>
					<InputGenerate {...inputProps} />
				</FormWrapper>
			</RowWrapper>
			<RowWrapper>
				<TextWrapper></TextWrapper>
				<WarnWrapper>{warnText && <Text {...warnText} />}</WarnWrapper>
			</RowWrapper>
		</Container>
	);
};

export default InputForm;
