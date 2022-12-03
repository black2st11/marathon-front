import React, {useState} from 'react';
import {BoardForm, BreadCrumb} from '../../../Components/Template';
import {firstProps, initialRefundState, initialState} from './data';
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
	const [state, setState] = useState(
		category === '환불' ? initialRefundState : initialState,
	);
	const [file, setFile] = useState();
	firstProps.inputs.forEach((input) => {
		setForm(input, state, setState);
	});
	firstProps.writeBtn.onClick = async () => {
		if (category === '환불' && state.password.length === 0) {
			return alert('비밀번호를 설정해주세요.');
		}
		let res = await postBoard({...state, category, files: [file]});

		if (res.isSuccess) {
			window.history.back();
		}
	};

	firstProps.fileInput.file.onChange = (e) => setFile(e.target.files[0]);
	firstProps.fileInput.file.fileName = file?.name;
	return (
		<Container>
			<BreadCrumb depths={['HOME', '참여마당', categoryMap[category]]} />
			<BoardForm {...firstProps} category={category} />
		</Container>
	);
};

export default BoardWrite;
