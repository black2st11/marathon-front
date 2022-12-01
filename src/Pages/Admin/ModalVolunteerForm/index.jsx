import React, {useState, useEffect} from 'react';
import * as S from './style';
import {MultipleInput} from '../../../Components/Organism/InputForm';
import {onlyNumber} from '../../../util/validator';
import {
	makeCourse,
	makeDay,
	makeGiftByCourse,
	makeMonth,
	makeParticipated,
	makeYear,
} from '../../../util';
import {getVolunteer, updatePerson} from '../../../api/admin';
import {
	getListGroupParticipation,
	postVolunteer,
	updateVolunteer,
} from '../../../api';
import {makeGroup} from '../../../util/generator';
import {Form, Space, Select, Input, Button} from 'antd';

const ModalPersonForm = ({id, onClick}) => {
	const [info, setInfo] = useState({
		id: 0,
		name: '',
		participated: '',
		year: '',
		month: '',
		day: '',
		phone1: '',
		phone2: '',
		phone3: '',
		school_name: '',
		class_name: '',
		grade: '',
		volunteer_id: '',
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			if (id) {
				let res = await getVolunteer({id: id});
				if (!res.isSuccess) {
					return;
				}

				let splitted_phone = res.data.phone.split('-');
				let splitted_birth = res.data.birth.split('-');
				setInfo({
					...res.data,
					phone1: splitted_phone[0] ? splitted_phone[0] : '',
					phone2: splitted_phone[1] ? splitted_phone[1] : '',
					phone3: splitted_phone[2] ? splitted_phone[2] : '',
					year: splitted_birth[0],
					month: splitted_birth[1],
					day: splitted_birth[2],
					volunteer_id: res.data.volunteer_id
						? res.data.volunteer_id
						: '',
				});
			}
			setIsLoading(false);
		})();
	}, []);

	const updateVolunteerData = async () => {
		let body = {
			...info,
			birth: `${info.year}-${info.month}-${info.day}`,
			phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
		};
		let res = await updateVolunteer({id: info.id, ...body});
		onClick();
	};
	return (
		<S.Container>
			{!isLoading && (
				<Form
					labelCol={{span: 6}}
					wrapperCol={{span: 14}}
					initialValues={info}
					style={{margin: '1rem'}}
					onFinish={async (values) => {
						let body = {
							...values,
							birth: `${values.year}-${values.month}-${values.day}`,
							phone: `${values.phone1}-${values.phone2}-${values.phone3}`,
						};
						if (id) {
							await updateVolunteer({id: info.id, ...body});
						} else {
							await postVolunteer({...body});
						}
						onClick();
					}}
				>
					<Form.Item label={'이름'} name={'name'}>
						<Input />
					</Form.Item>
					<Form.Item label={'참여날짜'} name={'participated'}>
						<Select
							options={[{value: '', label: '선택'}].concat(
								makeParticipated(),
							)}
						/>
					</Form.Item>
					<Form.Item label={'생년월일'} name={'birth'}>
						<Space>
							<Form.Item name={'year'}>
								<Select options={makeYear()} />
							</Form.Item>
							<Form.Item name={'month'}>
								<Select options={makeMonth()} />
							</Form.Item>
							<Form.Item name={'day'}>
								<Select options={makeDay()} />
							</Form.Item>
						</Space>
					</Form.Item>
					<Form.Item label={'연락처'}>
						<Space>
							<Form.Item name={'phone1'}>
								<Input />
							</Form.Item>
							<Form.Item name={'phone2'}>
								<Input />
							</Form.Item>
							<Form.Item name={'phone3'}>
								<Input />
							</Form.Item>
						</Space>
					</Form.Item>
					<Form.Item label={'학교'} name={'school_name'}>
						<Input />
					</Form.Item>
					<Form.Item label={'학년'} name={'grade'}>
						<Input />
					</Form.Item>
					<Form.Item label={'반'} name={'class_name'}>
						<Input />
					</Form.Item>
					<Form.Item label={'1635 ID'} name={'volunteer_id'}>
						<Input />
					</Form.Item>
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button htmlType={'submit'}>
							{id ? '수정' : '생성'}
						</Button>
					</div>
				</Form>
			)}
		</S.Container>
	);
};

export default ModalPersonForm;
