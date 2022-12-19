import {
	inputTextProps,
	inputEnglishTextProps,
	formButtonProps,
	inputButtonProps,
	warnText,
	ulsTitleProps,
	ulsContentProps,
} from '../../common';
import {onlyLetter, onlyNumber} from '../../../util/validator';
import {makeCourse, makeDay, makeMonth, makeYear} from '../../../util';
import {fontWeight} from '../../../config';
export const firstProps = {
	uls: {
		listStyle: 'none',
		items: [
			{
				content: {
					...ulsContentProps,
					children:
						'2인 이상 참가하시는 가족 또는 단체는 단체신청 메뉴에서 신청해주시기 바랍니다.',
				},
			},
		],
	},
	inputs: [
		{
			type: 'input',
			name: 'name',
			text: {
				...inputTextProps,
				children: '이름',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name',
			},
			input: {
				name: 'name',
				pattern: onlyLetter,
				placeholder: '이름을 입력해주세요',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'phone',
			text: {
				...inputTextProps,
				children: '연락처',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Contact',
			},
			sep: true,
			inputs: [
				{
					name: 'phone1',
					pattern: onlyNumber,
					maxlength: 3,
					placeholder: '010',
				},
				{
					name: 'phone2',
					pattern: onlyNumber,
					maxlength: 4,
					placeholder: '1111',
				},
				{
					name: 'phone3',
					pattern: onlyNumber,
					maxlength: 4,
					placeholder: '2222',
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'select',
			name: 'birth',
			text: {
				...inputTextProps,
				children: '생년월일',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Date of Birth',
			},
			selects: [
				{
					name: 'year',
					placeholder: '년도 (Year)',
					options: makeYear(),
				},
				{
					name: 'month',
					placeholder: '월 (Month)',
					options: makeMonth(),
				},
				{
					name: 'day',
					placeholder: '월 (Day)',
					options: makeDay(),
				},
			],
			warnText: {
				...warnText,
			},
		},
		{
			type: 'radio',
			name: 'gender',
			text: {
				...inputTextProps,
				children: '성별',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Gender',
			},
			items: [
				{
					value: '남성',
					children: '남성',
				},
				{
					value: '여성',
					children: '여성',
				},
			],
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '다음단계',
		},
	},
};

export const secondProps = {
	inputs: [
		{
			type: 'input',
			name: 'post_number',
			text: {
				...inputTextProps,
				children: '주소',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Address',
			},
			input: {
				name: 'post_number',
				pattern: onlyNumber,
				placeholder: '12305',
			},
			button: {
				isRounded: true,
				text: {
					...inputButtonProps,
					children: '우편번호 찾기',
				},
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'address',
			input: {
				name: 'address',
				placeholder: '주소를 입력해주세요',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'detail_address',
			input: {
				name: 'detail_address',
				placeholder: '상세 주소를 입력해주세요',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'email',
			text: {
				...inputTextProps,
				children: '이메일',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'E-mail',
			},
			input: {
				name: 'email',
				placeholder: 'test@test.com',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'input',
			name: 'depositor',
			text: {
				...inputTextProps,
				children: '입금자명',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Name of depositor',
			},
			input: {
				name: 'depositor',
				placeholder: '입금자명을 입력해주세요.',
			},
			warnText: {
				...warnText,
			},
		},
		{
			type: 'radio',
			name: 'course',
			text: {
				...inputTextProps,
				children: '참가종목',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Participating events',
			},
			items: makeCourse(),
			warnText: {
				...warnText,
			},
		},
		{
			type: 'select',
			name: 'gift',
			text: {
				...inputTextProps,
				children: '기념품 옵션',
			},
			englishText: {
				...inputEnglishTextProps,
				children: 'Option',
			},
			selects: [
				{
					name: 'gift',
					placeholder: '기념품 선택',
					options: [],
				},
			],
			warnText: {
				...warnText,
			},
		},
	],
	button: {
		text: {
			...formButtonProps,
			children: '신청완료',
		},
	},
};

export const invalidProps = {
	name: '',
	phone: '',
	birth: '',
	gender: '',
	post_number: '',
	address: '',
	detail_address: '',
	email: '',
	depositor: '',
	course: '',
	gift: '',
};

export const textareaProps = `□ 개인정보 수집동의 개인정보보호법 제15조 1항(개인정보의 수집·이용)에 의거하여 본인의 개인정보 수집에 동의합니다.

* 제공받은 개인정보는 행정자치부의 개인정보보호법에 의거하여 수집·이용·제공·파기 처리 기준을 준수합니다.
또한, 마라톤대회 진행에 필요한 용도 이외에는 절대 노출되지 않습니다. 이에 많은 협조 부탁드립니다.
(개인정보 보유 및 이용기간 : 12개월 / 대회가 종료된 후 1년까지)

■ 참가자 유의사항
* 주최측은 「개인정보보호법」및「신용정보의 이용 및 보호에 관한 법률」에 따라 신청자의 최소한의 정보만 수집-이용 및 제공합니다.
* 아래의 참가자 유의사항 및 개인정보 소비자 권익보호에 관한사항을 필히 숙지하고 동의한 다음 참가신청을 해주시기 바랍니다.

[안전사고 책임문제]
참가자 본인의 평소 건강상태를 고려하여 심장질환과 같은 신체상의 질병이 있을 경우 대회 참가를 삼가 주십시오.
본인의 건강관리에 충분히 주의를 기울이시기 바라며, 경기도중 신체상의 이상증후가 발생될 경우는 레이스를 중단하시고 진행요원에게 도움을 요청하시고 주최측이 준비한 의무차 혹은 회송차에 탑승 바랍니다.
주최측의 안내를 거부하거나 구간별로 교통통제 해제 이후에 발생되는 안전사고는 주최측이 책임지지 않습니다.
경기도중 발생하는 위급 환자에 대하여 주최측은 보호자의 동의 없이 수술 할 수 있습니다.
주최측은 경기중 발생한 부상 및 사고 등에 대해서 1차 응급조치와 더불어 보험이 적용되는 한도 내에서 치료비 부담 외의 어떠한 책임도 지지 않습니다.

[참가비 환불]
부상이나 출장 등 불가피한 사정으로 인해 참가가 불가능 할 경우, 주최측이 확인해 참가취소를 할 수 있습니다. 참가신청기간 중 취소 할 경우 참가비를 환불합니다. 단, 참가신청 접수마감 이후에는 참가취소 및 참가비 환불이 불가 하오니 이 점 유념해 주시기 바랍니다. 환불금 지급은 대회 실시일로부터 1개월 이내 일괄 지급합니다.

[기록 측정 - 하프, 10km에 한함]
정확한 기록 측정을 위해 참가자들은 사전 배부한 기록칩을 반드시 착용하시고 뛰셔야 합니다. 기록칩은 1회용으로 신발끈에 부착하시면 됩니다. 하프, 10km는 출발지점과 중간지점, 골인점의 체크매트를 반드시 통과하셔야 기록이 측정됩니다. 만약 칩을 부착하지 않거나 출발, 골인점 및 반환점 등에 설치된 체크매트를 통과하지 않을 경우 기록이 측정되지 않습니다. 하프, 10km 외는 기록측정이 되지 않습니다. 기록칩은 1회용으로 주최측에 반납하지 않아도 됩니다.

[실격처리]
다음에 해당되는 경우 참가자격이 박탈됩니다.
- 번호표 및 칩을 부착하지 않는 경우
- 번호표를 훼손했을 경우
- 대리 참가할 경우
- 칩을 복수로 부착하고 참가할 경우
- 출발시 본인의 참가종목이 아닌 다른 종목에서 출발할 경우
- 다른 사람으로부터 도움을 받을 경우
- 회송용 차량으로 골인지점으로 이동 후 골인하는 경우
- 대회 지정코스를 이탈하여 골인한 경우
- 기타 부정행위라고 판단 할 경우

[보험 안내]
<개인정보보호법>이 2011년 3월 29일 제정되어 그 경과기간을 거쳐 2012년에 처벌과 관련된 규정이 강화되면서, 마라톤대회에 참가하는 모든 각 개인의 상해 및 실손보험의 사전 자필서명 조회동의서가 필수적으로 필요하게 되어 2012년 1월부터 실제적으로 보험가입이 불가능하게 되었으므로 각 개인이 개별적으로 <개인상해보험> 또는 <개인실손보험>에 가입하여 각자의 안전을 도모하여야 합니다. 주최측은 행사보험에 가입하여 1차 응급처치와 더불어 보험 적용한도내 치료비 부담 외 어떠한 책임도 지지 않습니다.

□ 위 내용에 동의합니다.
{소비자 권익보호에 관한 사항}

▲최소한의 정보 처리 및 동의거부에 관한 안내
- 정보동의시 계약상담 및 가입설계를 위해 최소한의 정보만 수집·이용 및 제공하게 되며, 본 동의를 거부하시는 경우에는 보험계약상담 등 정상적인 서비스 제공이 불가능할 수 있습니다.

▲신용등급에 미치는 영향
-본 동의서에 의한 개인(신용)정보 조회는 귀하의 신용등급에 영향을 주지 않습니다.

1. 개인(신용)정보의 수집ㆍ이용에 관한 사항

당사는「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 수집·이용하고자 합니다. 이에 대하여 동의하십니까?


[개인(신용)정보의 수집ㆍ이용 목적]
- 보험계약 상담, 보험계약 인수여부 결정을 위한 판단

[수집ㆍ이용할 개인(신용)정보의 내용]
- 개인식별정보 (성명, 주민등록번호, 외국인등록번호, 성별, 주소, 직업, 전화번호, 휴대전화번호, 전자우편주소)
- 질병 및 상해에 관한 정보(자동차보험은 해당없음), 보험계약정보, 보험금지급 관련 정보(사고정보 포함)

[개인(신용)정보의 보유ㆍ이용 기간]
- 보유기간 및 이용기간 : 수집ㆍ이용 동의일로부터 1년까지

□ 위 내용에 동의합니다.

 

2. 개인(신용)정보의 조회에 관한 사항


당사는「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관으로부터 조회하고자 합니다. 이에 대하여 동의하십니까?

[개인(신용)정보의 조회 목적]
- 보험계약 상담, 보험계약 인수여부 결정을 위한 판단

[조회할 개인(신용)정보의 내용]
- 피보험자의 질병 및 상해에 관한 정보(자동차보험은 해당 없음) 보험계약정보, 보험금지급정보

[조회자(개인(신용)정보를 제공받는 자)의 개인(신용)정보의 보유ㆍ이용 기간
- 정보를 제공받은 날로부터 개인(신용)정보의 조회 목적을 달성할 때 까지

□ 위 내용에 동의합니다.

 

3. 개인(신용)정보의 제공에 관한 사항

[진단 및 계약적부 조사, 위험 조사, 권리 조사 및 요율구득이 필요한 보험계약의 경우]
당사는「신용정보의 이용 및 보호에 관한 법률」에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?

[개인(신용)정보를 제공받는 자]
- 병원, 의원 등 건강진단 관련 업무를 위탁받은 자, 계약적부 조사(위험 조사, 권리 조사 포함)를 위탁받은 자, 요율구득 및 재보험 처리를 의뢰받은 자

[개인(신용)정보를 제공받는 자의 이용목적]
- 건강진단 업무, 고지사항 확인(적부),의료자문(사의), 계약적부 조사, 위험 조사, 권리 조사, 요율구득 및 재보험 처리 업무

[제공할 개인(신용)정보의 내용]
- 개인식별정보 (성명, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소)
- 고지사항(신체ㆍ건강정보)

[제공받는 자의 개인(신용)정보 보유ㆍ이용기간]
- 제공 동의일로부터 개인(신용)정보의 제공목적을 달성할 때까지

□ 위 내용에 동의합니다.

 

4. 민감정보 및 고유식별정보의 처리에 관한 사항

당사는 「개인정보보호법」제23조 및 제24조에 따라 상기의 개인(신용)정보에 대한 개별 동의 사항에 대하여 다음과 같이 귀하의 민감정보(질병·상해정보) 및 고유식별정보(주민등록번호·외국인등록번호)를 처리(수집·이용, 제공 등)하고자 합니다. 이에 대하여 동의하십니까?

□ 위 내용에 동의합니다.

□질병·상해정보 처리(자동차보험은 해당 없음)에 동의합니다.

□주민등록번호·외국인등록번호 처리에 동의합니다.

□본인은 「개인정보보호법」및「신용정보의 이용 및 보호에 관한 법률」에 따라 귀사가 본인의 개인(신용)정보를 상기 내용과 같이 처리하는 것에 동의합니다.`;
