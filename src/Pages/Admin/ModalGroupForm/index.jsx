import React, {useState, useEffect} from 'react';
import * as S from './style';
import {buttonProps, groupProps, participationProps} from './data';
import {Input, Button, Select, Form, Space, Table} from 'antd';
import {getGroup, updateGroup} from '../../../api/admin';
import {
	makeCourse,
	makeDay,
	makeGiftByCourse,
	makeMonth,
	makeYear,
	setGroupForm,
} from '../../../util';

const ModalGroupForm = ({id, onClick}) => {
	const [group, setGroup] = useState({});
	const [participation, setParticipation] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			let res = await getGroup({id});
			let data = res.data;
			let participation_data = data.participation;
			let splitted_phone = res.data.phone.split('-');
			let splitted_birth = res.data.birth.split('-');

			setGroup({
				name: data.name,
				representative: data.representative,
				year: splitted_birth[0],
				month: splitted_birth[1],
				day: splitted_birth[2],
				phone1: splitted_phone[0],
				phone2: splitted_phone[1] ? splitted_phone[1] : '',
				phone3: splitted_phone[2] ? splitted_phone[2] : '',
				post_number: data.post_number,
				address: data.address,
				detail_address: data.detail_address,
				depositor: data.depositor,
			});

			let temp = [];
			participation_data.forEach((item) => {
				let splitted_phone = item.phone.split('-');
				temp.push({
					check: false,
					id: item.id,
					name: item.name,
					birth: item.birth,
					gender: item.gender,
					phone1: splitted_phone[0],
					phone2: splitted_phone[1] ? splitted_phone[1] : '',
					phone3: splitted_phone[2] ? splitted_phone[2] : '',
					bib: item.bib ? item.bib : '',
					course: item.course,
					gift: item.gift,
					is_deposit: item.is_deposit,
					deleted: null,
					created: item.created,
				});
			});
			setParticipation(temp);
			setIsLoading(false);
		})();
	}, []);

	buttonProps.button.onClick = async () => {
		let temp_group = {
			...group,
			phone: `${group.phone1}-${group.phone2}-${group.phone3}`,
			birth: `${group.year}-${group.month}-${group.day}`,
		};
		let temp_participations = [];
		participation.forEach((item) => {
			temp_participations.push({
				...item,
				phone: `${item.phone1}-${item.phone2}-${item.phone3}`,
			});
		});
		let body = {
			...temp_group,
			participation: temp_participations,
		};
		let res = await updateGroup({id, body});
		onClick();
	};
	const onChangeGroup = (index, name, value) => {
		const newState = [...participation];
		newState[index][name] = value;
		setGroup(newState);
	};
	return (
		<S.Container>
			{!isLoading && (
				<Form
					initialValues={group}
					onFinish={async (values) => {
						let participationData = participation.map((item) => {
							return {
								...item,
								phone: `${item.phone1}-${item.phone2}-${item.phone3}`,
							};
						});
						let body = {
							...values,
							phone: `${values.phone1}-${values.phone2}-${values.phone3}`,
							birth: `${values.year}-${values.month}-${values.day}`,
							participation: participationData,
						};
						let res = await updateGroup({id, body});
						onClick();
					}}
					labelCol={{span: 6}}
					wrapperCol={{span: 14}}
				>
					<Form.Item name={'name'} label={'이름'}>
						<Input />
					</Form.Item>
					<Form.Item name={'representative'} label={'대표자명'}>
						<Input />
					</Form.Item>
					<Form.Item name={'depositor'} label={'입금자명'}>
						<Input />
					</Form.Item>
					<Form.Item label={'대표자 연락처'}>
						<Space>
							<Form.Item name={'phone1'} noStyle>
								<Input />
							</Form.Item>
							<Form.Item name={'phone2'} noStyle>
								<Input />
							</Form.Item>
							<Form.Item name={'phone3'} noStyle>
								<Input />
							</Form.Item>
						</Space>
					</Form.Item>
					<Form.Item label={'대표자 생년월일'}>
						<Space>
							<Form.Item name={'year'} noStyle>
								<Select options={makeYear()} />
							</Form.Item>
							<Form.Item name={'month'} noStyle>
								<Select options={makeMonth()} />
							</Form.Item>
							<Form.Item name={'day'} noStyle>
								<Select options={makeDay()} />
							</Form.Item>
						</Space>
					</Form.Item>
					<Form.Item name={'email'} label={'이메일'}>
						<Input />
					</Form.Item>
					<Form.Item name={'post_number'} label={'우편번호'}>
						<Input />
					</Form.Item>
					<Form.Item name={'address'} label={'주소'}>
						<Input />
					</Form.Item>
					<Form.Item name={'detail_address'} label={'상세주소'}>
						<Input />
					</Form.Item>
					<Table dataSource={participation} scroll={{x: 1300}}>
						<Table.Column
							title={'이름'}
							align={'center'}
							render={(_, record, index) => (
								<Input
									style={{textAlign: 'center'}}
									value={record.name}
									onChange={(e) => {
										onChangeGroup(
											index,
											'name',
											e.target.value,
										);
									}}
								/>
							)}
						/>
						<Table.Column
							align={'center'}
							title={'생년월일'}
							render={(_, record, index) => (
								<Input
									style={{textAlign: 'center'}}
									value={record.birth}
									onChange={(e) => {
										onChangeGroup(
											index,
											'birth',
											e.target.value,
										);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'성별'}
							align={'center'}
							render={(_, record, index) => (
								<Select
									value={record.gender}
									options={[
										{label: '남성', value: '남성'},
										{label: '여성', value: '여성'},
									]}
									onChange={(e) => {
										onChangeGroup(index, 'gender', e);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'연락처'}
							align={'center'}
							render={(_, record, index) => (
								<S.RowWrapper>
									<Input
										style={{textAlign: 'center'}}
										value={record.phone1}
										onChange={(e) => {
											onChangeGroup(
												index,
												'phone1',
												e.target.value,
											);
										}}
									/>
									<Input
										style={{textAlign: 'center'}}
										value={record.phone2}
										onChange={(e) => {
											onChangeGroup(
												index,
												'phone2',
												e.target.value,
											);
										}}
									/>
									<Input
										style={{textAlign: 'center'}}
										value={record.phone3}
										onChange={(e) => {
											onChangeGroup(
												index,
												'phone3',
												e.target.value,
											);
										}}
									/>
								</S.RowWrapper>
							)}
						/>
						<Table.Column
							title={'배번'}
							align={'center'}
							render={(_, record, index) => (
								<Input
									style={{textAlign: 'center'}}
									value={record.bib}
									onChange={(e) => {
										onChangeGroup(
											index,
											'bib',
											e.target.value,
										);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'종목'}
							align={'center'}
							render={(_, record, index) => (
								<Select
									value={record.course}
									options={makeCourse()}
									onChange={(e) => {
										onChangeGroup(index, 'course', e);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'기념품'}
							align={'center'}
							render={(_, record, index) => (
								<Select
									value={record.gift}
									options={makeGiftByCourse(record.course)}
									onChange={(e) => {
										onChangeGroup(index, 'gift', e);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'입금여부'}
							align={'center'}
							render={(_, record, index) => (
								<Select
									value={record.is_deposit}
									options={[
										{value: true, label: '입금'},
										{value: false, label: '미입금'},
									]}
									onChange={(e) => {
										onChangeGroup(index, 'is_deposit', e);
									}}
								/>
							)}
						/>
						<Table.Column
							title={'삭제여부'}
							align={'center'}
							render={(_, record, index) => (
								<Select
									defaultValue={null}
									value={record.deleted}
									options={[
										{value: null, label: '선택'},
										{
											value: new Date().getUTCDate(),
											label: '삭제',
										},
									]}
									onChange={(e) => {
										onChangeGroup(index, 'deleted', e);
									}}
								/>
							)}
						/>
					</Table>
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button htmlType={'submit'}>수정</Button>
					</div>
				</Form>
			)}
		</S.Container>
	);
};

export default ModalGroupForm;
