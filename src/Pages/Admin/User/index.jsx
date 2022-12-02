import React, {useState, useEffect} from 'react';
import {Form, Table, Input, Button, Space, Modal} from 'antd';
import {
	createUser,
	deleteUser,
	getUser,
	getUserList,
	setPassword,
	updateUser,
} from '../../../api/admin';

const ModalUser = ({id, onClose}) => {
	const [info, setInfo] = useState({
		name: '',
		username: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			if (id) {
				let res = await getUser({id});
				if (res.isSuccess) {
					setInfo(res.data);
				} else {
					alert('해당 유저 정보를 얻는 중 문제 발생');
				}
			}
			setIsLoading(false);
		})();
	}, []);

	const resetPassword = async () => {
		let password = prompt('새로 설정할 비밀번호를 입력해주세요.');
		let res = await setPassword({password, id});
		if (res.isSuccess) {
			return alert('성공적으로 변경했습니다.');
		}
		return alert('비밀번호 변경에 오류가 있습니다.');
	};
	return (
		<React.Fragment>
			{!isLoading && (
				<Form
					style={{margin: '1rem auto'}}
					labelCol={{span: 4}}
					initialValues={info}
					onFinish={async (values) => {
						let res;
						if (id) {
							res = await updateUser({id, ...values});
						} else {
							res = await createUser({...values});
						}

						if (res.isSuccess) {
							onClose();
						}
					}}
				>
					<Form.Item name={'username'} label={'ID'}>
						<Input />
					</Form.Item>
					<Form.Item name={'name'} label={'이름'}>
						<Input />
					</Form.Item>
					{!id && (
						<Form.Item name={'password'} label={'비밀번호'}>
							<Input />
						</Form.Item>
					)}
					{id && (
						<Button onClick={resetPassword}>비밀번호 재설정</Button>
					)}
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button htmlType={'submit'}>
							{id ? '수정' : '생성'}
						</Button>
					</div>
				</Form>
			)}
		</React.Fragment>
	);
};

const userKeys = ['username', 'name'];
const keyMap = {username: 'ID', name: '이름'};
const User = () => {
	const [users, setUsers] = useState([]);
	const [id, setId] = useState(0);
	const [userForm, setUserForm] = useState(false);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		(async () => {
			let res = await getUserList();

			if (!res.isSuccess) {
				alert('권한이 없습니다.');
				window.history.back();
				return;
			}
			setUsers(res.data.results);
		})();
	}, []);

	return (
		<React.Fragment>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<Button onClick={() => setUserForm(true)}>유저 추가</Button>
			</div>
			<Table dataSource={users}>
				{userKeys.map((key) => (
					<Table.Column
						title={keyMap[key]}
						dataIndex={key}
						align={'center'}
					/>
				))}
				<Table.Column
					align={'center'}
					title={'액션'}
					render={(value, record, index) => {
						return (
							<Space>
								<Button
									onClick={async () => {
										let res = await deleteUser({
											id: record.id,
										});
										if (res.isSuccess) {
											setToggle(!toggle);
										}
									}}
								>
									삭제
								</Button>
								<Button onClick={() => setId(record.id)}>
									수정
								</Button>
							</Space>
						);
					}}
				/>
			</Table>
			{id !== 0 && (
				<Modal
					open={true}
					footer={[]}
					onCancel={() => {
						setId(0);
						setToggle(!toggle);
					}}
				>
					<ModalUser
						id={id}
						onClose={() => {
							setId(0);
							setToggle(!toggle);
						}}
					/>
				</Modal>
			)}
			{userForm && (
				<Modal
					open={true}
					footer={[]}
					onCancel={() => {
						setUserForm(false);
						setToggle(!toggle);
					}}
				>
					<ModalUser
						onClose={() => {
							setUserForm(false);
							setToggle(!toggle);
						}}
					/>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default User;
