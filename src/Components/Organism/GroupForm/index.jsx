import React, {useRef} from 'react';
import * as S from './style';
import {Input, Button, Text, Icon, Select, CheckBox} from '../../Atom';
import {MobileCurrentLength} from './style';

const Tds = ({tds = []}) => {
	const inputsRef = useRef([]);
	return tds.map((td, index, array) => {
		if (td.button) {
			return (
				<S.Td>
					<S.ButtonWrapper>
						<Button {...td.button} />
					</S.ButtonWrapper>
				</S.Td>
			);
		} else if (td.inputs) {
			return (
				<S.Td>
					<S.MultiWrapper>
						<S.MultiItem>
							<Input
								{...td.inputs[0]}
								ref={(e) => (inputsRef.current[0] = e)}
								isMax={() => {
									console.log(inputsRef);
									inputsRef.current[1]?.focus();
								}}
							/>
						</S.MultiItem>
						<S.MultiItem>
							<Input
								{...td.inputs[1]}
								ref={(e) => (inputsRef.current[1] = e)}
								isMax={() => inputsRef.current[2]?.focus()}
							/>
						</S.MultiItem>
						<S.MultiItem>
							<Input
								{...td.inputs[2]}
								ref={(e) => (inputsRef.current[2] = e)}
							/>
						</S.MultiItem>
					</S.MultiWrapper>
				</S.Td>
			);
		} else if (td.check) {
			return (
				<S.Td>
					<S.CheckBoxWrapper>
						<CheckBox {...td.check} />
					</S.CheckBoxWrapper>
				</S.Td>
			);
		} else if (td.select) {
			return (
				<S.Td>
					<Select {...td.select} />
				</S.Td>
			);
		} else if (td.input) {
			return (
				<S.Td>
					<Input {...td.input}></Input>
				</S.Td>
			);
		} else {
			return (
				<S.Td>
					<Text {...td} />
				</S.Td>
			);
		}
	});
};

const GroupForm = ({
	ths,
	trs = [],
	checkBtn,
	addBtn,
	deleteBtn,
	currentText,
	maxWidth,
}) => {
	const props = {
		maxWidth,
	};
	return (
		<S.Container {...props}>
			<S.MobileCurrentLength>
				<Text {...currentText.normal}>{currentText.preFix}</Text>
				<Text {...currentText.strong}>{trs.length}</Text>
				<Text {...currentText.normal}>{currentText.postFix}</Text>
			</S.MobileCurrentLength>
			<S.HandleWrapper>
				<S.CheckButtonWrapper>
					<Button {...checkBtn} />
				</S.CheckButtonWrapper>
				<S.CurrentLength>
					<Text {...currentText.normal}>{currentText.preFix}</Text>
					<Text {...currentText.strong}>{trs.length}</Text>
					<Text {...currentText.normal}>{currentText.postFix}</Text>
				</S.CurrentLength>
				<S.AddButtonWrapper>
					<Button {...addBtn} />
				</S.AddButtonWrapper>
				<S.CheckDeleteButtonWrapper>
					<Button {...deleteBtn} />
				</S.CheckDeleteButtonWrapper>
			</S.HandleWrapper>
			<S.Table>
				<S.THead>
					<S.Tr>
						{ths.map((th, index, array) => (
							<S.Th key={index}>
								{th.category === 'check' ? (
									<S.CheckBoxWrapper>
										<CheckBox {...th} />
									</S.CheckBoxWrapper>
								) : (
									<Text {...th}></Text>
								)}
							</S.Th>
						))}
					</S.Tr>
				</S.THead>
				<S.TBody>
					{trs.map((tds, index, array) => (
						<S.Tr key={index}>
							<Tds tds={tds} />
						</S.Tr>
					))}
				</S.TBody>
			</S.Table>
		</S.Container>
	);
};

export const GroupTable = ({ths, trs = [], currentText, maxWidth}) => {
	const props = {
		maxWidth,
	};

	return (
		<S.Container {...props}>
			{currentText && (
				<S.HandleWrapper>
					<S.CurrentLength>
						<Text {...currentText.normal}>
							{currentText.preFix}
						</Text>
						<Text {...currentText.strong}>{trs.length}</Text>
						<Text {...currentText.normal}>
							{currentText.postFix}
						</Text>
					</S.CurrentLength>
					<S.MobileCurrentLength>
						<Text {...currentText.normal}>
							{currentText.preFix}
						</Text>
						<Text {...currentText.strong}>{trs.length}</Text>
						<Text {...currentText.normal}>
							{currentText.postFix}
						</Text>
					</S.MobileCurrentLength>
				</S.HandleWrapper>
			)}

			<S.Table>
				<S.THead>
					<S.Tr>
						{ths.map((th, index, array) => (
							<S.Th key={index}>
								{th.category === 'check' ? (
									<S.CheckBoxWrapper>
										<CheckBox {...th} />
									</S.CheckBoxWrapper>
								) : (
									<Text {...th}></Text>
								)}
							</S.Th>
						))}
					</S.Tr>
				</S.THead>
				<S.TBody>
					{trs.map((tds, index, array) => (
						<S.Tr key={index}>
							<Tds tds={tds} />
						</S.Tr>
					))}
				</S.TBody>
			</S.Table>
		</S.Container>
	);
};

export default GroupForm;
