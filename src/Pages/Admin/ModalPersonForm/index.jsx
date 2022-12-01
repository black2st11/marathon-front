import React, {useState, useEffect} from 'react';
import * as S from './style';
import {
	makeCourse,
	makeDay,
	makeGiftByCourse,
	makeMonth,
	makeYear,
} from '../../../util';
import {Form, Input, Select, Button, Space} from 'antd';
import {getPerson, updatePerson} from '../../../api/admin';
import {getListGroupParticipation, postPersonParticipation} from '../../../api';
import {makeGroup} from '../../../util/generator';

const ModalPersonForm = ({person, onClick}) => {
	const [form] = Form.useForm();
	const [info, setInfo] = useState({
		name: '',
		birth: '',
		post_number: '',
		address: '',
		detail_address: '',
		depositor: '',
		email: '',
		gender: '',
		bib: '',
		course: '',
		gift: '',
		phone1: '',
		phone2: '',
		phone3: '',
		group_id: 0,
	});
	const [course, setCourse] = useState('');
	const [group, setGroup] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			if (person) {
				let res = await getPerson({id: person});
				let group_res = await getListGroupParticipation({
					verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
				});
				setGroup(group_res.data.results);
				if (!res.isSuccess) {
					return;
				}
				let splitted_phone = res.data.participation.phone.split('-');
				let splitted_birth = res.data.participation.birth.split('-');
				setInfo({
					...res.data.participation,
					...res.data,
					phone1: splitted_phone[0] ? splitted_phone[0] : '',
					phone2: splitted_phone[1] ? splitted_phone[1] : '',
					phone3: splitted_phone[2] ? splitted_phone[2] : '',
					year: splitted_birth[0],
					month: splitted_birth[1],
					day: splitted_birth[2],
					bib: res.data.participation.bib
						? res.data.participation.bib
						: '',
					email: res.data.email ? res.data.email : '',
				});
			}
			setIsLoading(false);
		})();
	}, []);

	return (
		<S.Container>
			{!isLoading && (
				<Form
					initialValues={info}
					onFinish={async (values) => {
						let body = {
							post_number: values.post_number,
							address: values.address,
							detail_address: values.detail_address,
							depositor: values.depositor,
							email: values.email,
							participation: {
								birth: `${values.year}-${values.month}-${values.day}`,
								phone: `${values.phone1}-${values.phone2}-${values.phone3}`,
								gender: values.gender,
								course: values.course,
								name: values.name,
								bib: values.bib,
								is_deposit: values.is_deposit,
								gift: values.gift,
								group_id: values.group_id,
							},
						};

						if (person) {
							let res = await updatePerson({id: info.id, body});
						} else {
							let res = await postPersonParticipation({
								...body,
								...body.participation,
							});
						}
						onClick();
					}}
					style={{margin: '1rem'}}
					labelCol={{span: 4}}
					wrapperCol={{span: 14}}
					form={form}
				>
					<Form.Item name={'name'} label={'이름'}>
						<Input />
					</Form.Item>
					<Form.Item label={'생년월일'}>
						<Space>
							<Form.Item name={'year'} noStyle>
								<Select options={makeYear()} />
							</Form.Item>
							-
							<Form.Item name={'month'} noStyle>
								<Select options={makeMonth()} />
							</Form.Item>
							-
							<Form.Item name={'day'} noStyle>
								<Select options={makeDay()} />
							</Form.Item>
						</Space>
					</Form.Item>
					<Form.Item name={'post_number'} label={'우편번호'}>
						<Input />
					</Form.Item>
					<Form.Item name={'address'} label={'주소'}>
						<Input />
					</Form.Item>
					<Form.Item name={'detail_address'} label={'상세 주소'}>
						<Input />
					</Form.Item>
					<Form.Item name={'depositor'} label={'입금자명'}>
						<Input />
					</Form.Item>
					<Form.Item name={'email'} label={'이메일'}>
						<Input />
					</Form.Item>
					<Form.Item name={'gender'} label={'성별'}>
						<Select
							options={[
								{name: '남성', value: '남성'},
								{name: '여성', value: '여성'},
							]}
						/>
					</Form.Item>
					<Form.Item name={'bib'} label={'배번호'}>
						<Input />
					</Form.Item>
					<Form.Item label={'연락처'}>
						<Space align={'center'}>
							<Form.Item name={'phone1'} noStyle>
								<Input />
							</Form.Item>
							-
							<Form.Item name={'phone2'} noStyle>
								<Input />
							</Form.Item>
							-
							<Form.Item name={'phone3'} noStyle>
								<Input />
							</Form.Item>
						</Space>
					</Form.Item>
					<S.RowWrapper></S.RowWrapper>
					<Form.Item name={'course'} label={'코스'}>
						<Select
							options={makeCourse()}
							onChange={() =>
								setCourse(form.getFieldValue('course'))
							}
						/>
					</Form.Item>
					<Form.Item name={'gift'} label={'기념품'}>
						<Select
							options={makeGiftByCourse(
								form.getFieldValue('course'),
							)}
						/>
					</Form.Item>
					<Form.Item name={'is_deposit'} label={'입금여부'}>
						<Select
							options={[
								{value: true, label: '입금'},
								{value: false, label: '미입금'},
							]}
						/>
					</Form.Item>
					{person && (
						<Form.Item name={'group_id'} label={'그룹 선택'}>
							<Select options={makeGroup(group)} />
						</Form.Item>
					)}
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button htmlType={'submit'}>
							{person ? '수정' : '생성'}
						</Button>
					</div>
				</Form>
			)}
		</S.Container>
	);
};

export default ModalPersonForm;
