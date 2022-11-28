import React, {useState} from 'react';
import {BoardInput} from '../../Organism';
import * as S from './style';
import {Text, Button, FileInput, CheckBox} from '../../Atom';

const BoradForm = ({
	inputs = [],
	description,
	listBtn,
	writeBtn,
	fileInput,
	category,
}) => {
	const [checkBox, setCheckBox] = useState(false);
	return (
		<S.Container>
			{inputs.map((input) => (
				<S.InputFormWrapper>
					{input.input?.name !== 'password' ? (
						<BoardInput {...input} />
					) : category === '환불' ? (
						<BoardInput {...input} />
					) : category === '자유' ? (
						<>
							<div
								style={{display: 'flex', alignItems: 'center'}}
							>
								<CheckBox
									onChange={(e) =>
										setCheckBox(e.target.value)
									}
									value={checkBox}
								></CheckBox>
								<span style={{marginLeft: '1rem'}}>
									비밀번호 설정
								</span>
							</div>
							{checkBox && <BoardInput {...input} />}
						</>
					) : (
						<></>
					)}
				</S.InputFormWrapper>
			))}
			<S.DescriptionWrapper>
				<Text {...description} />
			</S.DescriptionWrapper>
			<S.FileWrapper>
				<Text {...fileInput.text} />
				<FileInput {...fileInput.file} />
			</S.FileWrapper>
			<S.ButtonWrapper>
				<Button {...listBtn} />
				<Button {...writeBtn} />
			</S.ButtonWrapper>
		</S.Container>
	);
};

export default BoradForm;
