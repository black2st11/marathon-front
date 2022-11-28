import React, {useState} from 'react';
import {BoardForm, BreadCrumb} from '../../../Components/Template';
import {firstProps, initialState} from './data';
import {setForm} from '../../../util';
import {postBoard} from '../../../api/board';
import {Container} from '../../../Components/Atom';

const categoryMap = {
	자유: '자유게시판',
	홍보: '홍보게시판',
	환불: '환불게시판',
	공지: '공지게시판',
	사진: '사진게시판',
};

const BoardWrite = ({category = '자유'}) => {
	const [state, setState] = useState(initialState);
	const [file, setFile] = useState();
	firstProps.inputs.forEach((input) => {
		setForm(input, state, setState);
	});
	firstProps.writeBtn.onClick = async () => {
		await postBoard({...state, category, files: [file]});
	};

	firstProps.fileInput.file.onChange = (e) => setFile(e.target.files[0]);
	firstProps.fileInput.file.fileName = file?.name;
	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여마당', categoryMap[category]]} />
			<BoardForm {...firstProps} />
		</Container>
	);
};

export default BoardWrite;
