import {Input, Form, Typography} from 'antd';
import {useState} from 'react';
import {postRecord} from '../../../api/admin';

const RecordForm = ({state, onOk}) => {
	const [record, _] = useState({
		name: state.name,
		bib: state.bib,
		gender: state.gender,
		course: state.gender,
	});

	return (
		<Form
			initialValues={record}
			onFinish={async (values) => {
				let res = await postRecord({...values});
				if (res.isSuccess) {
					return onOk();
				}
				return alert('에러 발생');
			}}
		>
			<Form.Item label={''}>
				<Typography.Text></Typography.Text>
			</Form.Item>
			<Form.Item label={''}>
				<Typography.Text></Typography.Text>
			</Form.Item>
			<Form.Item label={''}>
				<Typography.Text></Typography.Text>
			</Form.Item>
			<Form.Item label={''}>
				<Typography.Text></Typography.Text>
			</Form.Item>
			<Form.Item name={''} label={''}>
				<Input placeholder={'00:00'} />
			</Form.Item>
			<Form.Item name={''} label={''}>
				<Input placeholder={'00:00'} />
			</Form.Item>
		</Form>
	);
};

export default RecordForm;
