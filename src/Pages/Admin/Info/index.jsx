import React, {useState, useEffect} from 'react';
import {
	Button,
	DatePicker,
	Form,
	Image,
	Input,
	Modal,
	Space,
	Table,
} from 'antd';
import dayjs from 'dayjs';
import {Container} from '../../../Components/Atom';
import {
	createModal,
	deleteModal,
	getInfo,
	getModals,
	updateInfo,
	updateModal,
} from '../../../api/admin';
import {AiOutlineDropbox} from 'react-icons/ai';
import Dragger from 'antd/es/upload/Dragger';
import {noImage} from '../../../config/images';

const dateFormat = 'YYYY-MM-DD';
const datetimeFormat = 'YYYY-MM-DD HH:mm:ss';

const AdminInfo = () => {
	const [info, setInfo] = useState({
		id: 0,
		name: '',
		started: '',
		ended: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const [modal, setModal] = useState(false);
	const [fileList, setFileList] = useState([]);
	const [modals, setModals] = useState([]);
	const [toggle, setToggle] = useState(false);

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

	useEffect(() => {
		(async () => {
			let res = await getInfo();
			let modal_res = await getModals({});
			console.log(modal_res);
			if (!res.isSuccess || res.data.count !== 1) {
				return alert(
					'현재 정보가 잘못 설정되었습니다. 관리자에게 문의해주세요',
				);
			}

			if (!modal_res.isSuccess) {
			}
			setModals(modal_res.data.results);

			setInfo({
				...res.data.results[0],
			});
			console.log(res);
			setIsLoading(false);
		})();
	}, [toggle]);

	return (
		<>
			{isLoading && <></>}
			{!isLoading && (
				<Container>
					<Form
						initialValues={{
							name: info.name,
							started: dayjs(info.started.dateFormat),
							ended: dayjs(info.ended, dateFormat),
						}}
						onFinish={async (values) => {
							let started = values.started.format(dateFormat);
							let ended = values.ended.format(datetimeFormat);

							await updateInfo({
								name: values.name,
								started,
								ended,
								id: info.id,
							});
						}}
					>
						<Form.Item name={'name'} label={'대회 이름'}>
							<Input />
						</Form.Item>
						<Form.Item label={'대회 기간'}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'baseline',
								}}
							>
								<Form.Item
									name={'started'}
									style={{width: '48%'}}
								>
									<DatePicker
										style={{width: '100%'}}
										dateFormat={dateFormat}
									/>
								</Form.Item>
								~
								<Form.Item
									name={'ended'}
									style={{width: '48%'}}
								>
									<DatePicker
										showTime
										style={{width: '100%'}}
										dateFormat={dateFormat}
									/>
								</Form.Item>
							</div>{' '}
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}
							>
								<Button type={'primary'} htmlType={'수정'}>
									수정
								</Button>
							</div>
						</Form.Item>
					</Form>
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<Button
							onClick={() => {
								setModal(true);
							}}
						>
							팝업 생성
						</Button>
					</div>
					<Table dataSource={modals}>
						<Table.Column
							title={'이미지'}
							align={'center'}
							render={(value, record, index) => (
								<Image
									width={100}
									src={record.image}
									fallback={noImage}
								/>
							)}
						/>
						<Table.Column
							title={'활성화여부'}
							align={'center'}
							render={(value, record) => {
								return record.is_active ? '활성화' : '비활성화';
							}}
						/>
						<Table.Column
							title={'액션'}
							align={'center'}
							render={(value, record, index) => {
								return (
									<Space>
										<Button
											onClick={async () => {
												await updateModal({
													id: record.id,
													is_active:
														!record.is_active,
												});

												setToggle(!toggle);
											}}
										>
											활성화/비활성화
										</Button>
										<Button
											onClick={async () => {
												await deleteModal({
													id: record.id,
												});
												setToggle(!toggle);
											}}
										>
											삭제
										</Button>
									</Space>
								);
							}}
						/>
					</Table>
					{modal && (
						<Modal
							open={modal}
							footer={[]}
							onCancel={() => setModal(false)}
						>
							<Dragger {...props} style={{margin: '1rem 0'}}>
								<p className='ant-upload-drag-icon'>
									<AiOutlineDropbox />
								</p>
								<p className='ant-upload-text'>
									Click or drag file to this area to upload
								</p>
								<p className='ant-upload-hint'>
									Support for a single or bulk upload.
									Strictly prohibit from uploading company
									data or other band files
								</p>
							</Dragger>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}
							>
								<Button
									onClick={async () => {
										let res = await createModal({
											image: fileList[0],
										});

										console.log(res);
										if (res.status === 201) {
											setModal(false);
											setToggle(!toggle);
										}

										return alert('문제가 발생하였습니다.');
									}}
								>
									팝업 생성
								</Button>
							</div>{' '}
						</Modal>
					)}
				</Container>
			)}
		</>
	);
};

export default AdminInfo;
