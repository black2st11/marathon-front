import React, {useState, useEffect} from 'react';
import {Text, Input, Select, Button} from '../../../Components/Atom';
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
import {getListGroupParticipation, updateVolunteer} from '../../../api';
import {makeGroup} from '../../../util/generator';

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

	useEffect(() => {
		(async () => {
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
			<S.Wrapper>
				<Text children='이름' />
				<Input
					name='name'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.name}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='참여날짜' />
				<S.RowWrapper>
					<Select
						options={makeParticipated()}
						name={'participated'}
						onChange={(e) => {
							setInfo({...info, [e.target.name]: e.target.value});
						}}
						value={info.participated}
					/>
				</S.RowWrapper>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='생년월일' />
				<S.RowWrapper>
					<Select
						options={makeYear()}
						name={'year'}
						onChange={(e) => {
							setInfo({...info, [e.target.name]: e.target.value});
						}}
						value={info.year}
					/>
					<Select
						options={makeMonth()}
						name={'month'}
						onChange={(e) => {
							setInfo({...info, [e.target.name]: e.target.value});
						}}
						value={info.month}
					/>
					<Select
						options={makeDay()}
						name={'day'}
						onChange={(e) => {
							setInfo({...info, [e.target.name]: e.target.value});
						}}
						value={info.day}
					/>
				</S.RowWrapper>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='핸드폰' />
				<S.RowWrapper>
					<MultipleInput
						inputs={[
							{
								name: 'phone1',
								pattern: onlyNumber,
								maxlength: 3,
								onChange: (e) =>
									setInfo({
										...info,
										[e.target.name]: e.target.value,
									}),
								value: info.phone1,
							},
							{
								name: 'phone2',
								pattern: onlyNumber,
								maxlength: 4,
								onChange: (e) =>
									setInfo({
										...info,
										[e.target.name]: e.target.value,
									}),
								value: info.phone2,
							},
							{
								name: 'phone3',
								pattern: onlyNumber,
								maxlength: 4,
								onChange: (e) =>
									setInfo({
										...info,
										[e.target.name]: e.target.value,
									}),
								value: info.phone3,
							},
						]}
					/>
				</S.RowWrapper>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='학교명' />
				<Input
					name='school_name'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.school_name}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='학년' />
				<Input
					name='grade'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.grade}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='학교명' />
				<Input
					name='class_name'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.class_name}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='1635ID' />
				<Input
					name='volunteer_id'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.volunteer_id}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Button
					text={{children: '저장', color: 'white'}}
					onClick={() => {
						updateVolunteerData();
					}}
				/>
			</S.Wrapper>
		</S.Container>
	);
};

export default ModalPersonForm;
