import React, {useState} from 'react';
import {Button, Form, Input, Upload, message} from 'antd';
import {AiOutlineDropbox} from 'react-icons/ai';
import {postBoard} from '../../../api/board';

const {Dragger} = Upload;

const BoardForm = ({onClose, category}) => {
	const [fileList, setFileList] = useState([]);

	const props = {
		multiple: true,
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file) => {
			setFileList([...fileList, file]);

			return false;
		},
		fileList,
	};

	return (
		<Form
			style={{margin: '1rem'}}
			initialValues={{title: '', author: '관리자', content: '', link: ''}}
			onFinish={async (values) => {
				console.log(values);
				let data = {
					title: values.title,
					author: '관리자',
					content: values.content ? values.content : '',
					category: category,
					link: values.link ? values.link : '',
					password: '',
					files: fileList,
				};
				let res = await postBoard({...data});
				onClose();
			}}
		>
			<Form.Item label='제목' name='title'>
				<Input />
			</Form.Item>
			{category === '사진' && (
				<Form.Item label='링크' name={'link'}>
					<Input />
				</Form.Item>
			)}
			{category !== '사진' && (
				<Form.Item label='내용' name='content'>
					<Input.TextArea />
				</Form.Item>
			)}
			<Form.Item label='파일' name='fileList'>
				<Dragger {...props}>
					<p className='ant-upload-drag-icon'>
						<AiOutlineDropbox />
					</p>
					<p className='ant-upload-text'>
						Click or drag file to this area to upload
					</p>
					<p className='ant-upload-hint'>
						Support for a single or bulk upload. Strictly prohibit
						from uploading company data or other band files
					</p>
				</Dragger>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'end',
						marginTop: '1rem',
					}}
				>
					<Button htmlType={'submit'}>생성</Button>
				</div>
			</Form.Item>
		</Form>
	);
};

export default BoardForm;
