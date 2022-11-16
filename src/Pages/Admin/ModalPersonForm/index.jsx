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
	makeYear,
} from '../../../util';
import {getPerson, updatePerson} from '../../../api/admin';
import {getListGroupParticipation} from '../../../api';
import {makeGroup} from '../../../util/generator';

const ModalPersonForm = ({person, onClick}) => {
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

	const [group, setGroup] = useState([]);

	useEffect(() => {
		(async () => {
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
			});
		})();
	}, []);

	const updatePersonData = async () => {
		let body = {
			post_number: info.post_number,
			address: info.address,
			detail_address: info.detail_address,
			depositor: info.depositor,
			email: info.email,
			participation: {
				birth: `${info.year}-${info.month}-${info.day}`,
				phone: `${info.phone1}-${info.phone2}-${info.phone3}`,
				gender: info.gender,
				course: info.course,
				name: info.name,
				bib: info.bib,
				is_deposit: info.is_deposit,
				gift: info.gift,
				group_id: info.group_id,
			},
		};

		let res = await updatePerson({id: info.id, body});
		onClick();
	};
	console.log(info);
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
				<Text children='우편번호' />
				<Input
					name='post_number'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.post_number}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='주소' />
				<Input
					name='address'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.address}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='상세주소' />
				<Input
					name='detail_address'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.detail_address}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='입금자' />
				<Input
					name='depositor'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.depositor}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='이메일' />
				<Input
					name='email'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.email}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='성별' />
				<Select
					options={[
						{name: '남성', value: '남성'},
						{name: '여성', value: '여성'},
					]}
					name='gender'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.gender}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='배번' />
				<Input
					name='bib'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.bib}
				/>
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
				<Text children='코스' />
				<Select
					options={makeCourse()}
					name='course'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.course}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='선물' />
				<Select
					options={makeGiftByCourse(info.course)}
					name='gift'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.gift}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='입금여부' />
				<Select
					options={[
						{value: true, name: '입금'},
						{value: false, name: '미입금'},
					]}
					name='is_deposit'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.is_deposit}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Text children='그룹선택' />
				<Select
					options={makeGroup(group)}
					name='group_id'
					onChange={(e) =>
						setInfo({...info, [e.target.name]: e.target.value})
					}
					value={info.group_id}
				/>
			</S.Wrapper>
			<S.Wrapper>
				<Button
					text={{children: '저장', color: 'white'}}
					onClick={() => {
						updatePersonData();
					}}
				/>
			</S.Wrapper>
		</S.Container>
	);
};

export default ModalPersonForm;
