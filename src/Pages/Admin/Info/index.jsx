import React, {useState, useEffect} from 'react';
import {Button, Form, Image, Input, Space, Table} from 'antd';
import {Container} from '../../../Components/Atom';

const AdminInfo = () => {
	const [info, setInfo] = useState({
		name: '',
		started: '',
		ended: '',
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {})();
	}, []);

	return (
		<Container>
			<Form initialValues={info}>
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
						<Form.Item name={'stated'} style={{width: '48%'}}>
							<Input />
						</Form.Item>
						~
						<Form.Item name={'ended'} style={{width: '48%'}}>
							<Input />
						</Form.Item>
					</div>
				</Form.Item>
			</Form>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<Button>팝업 생성</Button>
			</div>
			<Table>
				<Table.Column title={'번호'} align={'center'} />
				<Table.Column title={'제목'} align={'center'} />
				<Table.Column
					title={'이미지'}
					align={'center'}
					render={(value, record, index) => (
						<Image width={100} src={record.src} />
					)}
				/>
				<Table.Column title={'활성화여부'} align={'center'} />
				<Table.Column
					title={'액션'}
					align={'center'}
					render={(value, record, index) => {
						return (
							<Space>
								<Button>활성화/비활성화</Button>
								<Button>삭제</Button>
							</Space>
						);
					}}
				/>
			</Table>
		</Container>
	);
};

export default AdminInfo;
