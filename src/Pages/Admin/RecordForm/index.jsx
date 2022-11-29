import {Input, Form, Typography, Button} from 'antd';
import {useState} from 'react';
import {postRecord} from '../../../api/admin';

const RecordForm = ({state, onOk}) => {
	const [record, _] = useState({
		id: state.records ? state.records.id : undefined,
		name: state.name,
		bib: state.bib,
		gender: state.gender,
		course: state.gender,
		record: state.records ? state.records.record : '',
		return_record: state.records ? state.records.return_record : '',
		participation: state.id,
	});

	return (
		<Form
			initialValues={record}
			onFinish={async (values) => {
				let res = await postRecord({
					...values,
					id: record.id,
					participation_id: state.id,
				});
				if (res.isSuccess) {
					return onOk();
				}
				return alert('에러 발생');
			}}
		>
			<Form.Item label={'이름'}>
				<Typography.Text>{record.name}</Typography.Text>
			</Form.Item>
			<Form.Item label={'성별'}>
				<Typography.Text>{record.gender}</Typography.Text>
			</Form.Item>
			<Form.Item label={'배번호'}>
				<Typography.Text>{record.bib}</Typography.Text>
			</Form.Item>
			<Form.Item label={'종목'}>
				<Typography.Text>{record.course}</Typography.Text>
			</Form.Item>
			<Form.Item name={'record'} label={'전체기록'}>
				<Input placeholder={'00:00'} />
			</Form.Item>
			<Form.Item name={'return_record'} label={'반환기록'}>
				<Input placeholder={'00:00'} />
			</Form.Item>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<Button type={'primary'} htmlType={'submit'}>
					등록
				</Button>
			</div>
		</Form>
	);
};

export default RecordForm;
