import React, {useEffect} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {login, verityVerification} from '../../../api/admin';

const Login = () => {
	useEffect(() => {
		let verification = sessionStorage.getItem('verification');
		if (verification) {
			(async () => {
				let res = await verityVerification();

				if (res.data.verify) {
					window.location.href =
						window.location.origin + `/admin/participation`;
				}
			})();
		}
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				margin: '4rem auto',
				maxWidth: '360px',
				width: '100%',
			}}
		>
			<Form
				labelCol={{span: 4}}
				initialValues={{username: '', password: ''}}
				onFinish={async (values) => {
					let res = await login({...values});
					if (res.isSuccess) {
						sessionStorage.setItem(
							'verification',
							res.data.verification,
						);
						window.location.href =
							window.location.origin + `/admin/participation`;
					} else {
						alert('로그인 정보가 틀립니다. 확인해주세요.');
					}
				}}
			>
				<Form.Item name={'username'}>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<Typography.Text>ID</Typography.Text>
						<Input />
					</div>
				</Form.Item>
				<Form.Item name={'password'}>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<Typography.Text>PASSWORD</Typography.Text>
						<Input type={'password'} />
					</div>
				</Form.Item>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button style={{width: '300px'}} htmlType={'submit'}>
						로그인
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;
