import React, {useEffect, useState} from 'react';
import {getBoard, postComment} from '../../../api/board';
import {Button, Card, Divider, Form, Input, Typography} from 'antd';

const {Title, Paragraph, Text, Link} = Typography;

const BoardUpdateForm = ({id, onClose}) => {
	const [post, setPost] = useState({
		author: '',
		title: '',
		created: '',
		content: '',
		attachments: [],
		comments: [],
	});
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		(async () => {
			let res = await getBoard({id});
			setPost(res.data);
		})();
	}, [toggle, id]);

	return (
		<div>
			<Title>{post.title}</Title>
			<Title level={5}>{post.author}</Title>
			<Text>{post.created}</Text>
			<Divider />
			<Paragraph strong>{post.content}</Paragraph>
			<Divider />
			{post.comments.map((comment) => (
				<Card
					title={comment.author}
					style={{margin: '1rem 0'}}
					extra={<Button onClick={() => {}}>삭제</Button>}
				>
					<Paragraph>{comment.content}</Paragraph>
				</Card>
			))}
			{post.attachments.map((attachment) => (
				<Button
					onClick={() => (window.location.href = attachment.file.url)}
				>
					{attachment.file.name}
				</Button>
			))}
			<Form
				initialValues={{content: ''}}
				style={{margin: '1rem 0'}}
				onFinish={async (values) => {
					await postComment({
						board_id: id,
						content: values.content,
						author: '관리자',
					});
					setToggle(!toggle);
				}}
			>
				<Form.Item label='댓글' name='content'>
					<Input.TextArea />
				</Form.Item>
				<div
					style={{
						width: '100%',
						textAlign: 'right',
					}}
				>
					<Button htmlType={'submit'}>댓글 달기</Button>
				</div>
			</Form>
		</div>
	);
};

export default BoardUpdateForm;
