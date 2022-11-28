export const actionOptions = [
	{value: '', label: '선택'},
	{value: 'delete', label: '영구 삭제'},
	{value: 'recover', label: '복구'},
];

export const columns = [
	{title: '번호', dataIndex: 'no'},
	{title: '이름', dataIndex: 'name', sorter: {multiple: 1}},
	{title: '성별', dataIndex: 'gender', sorter: {multiple: 1}},
	{title: '연락처', dataIndex: 'phone', sorter: {multiple: 1}},
	{title: '구분', dataIndex: 'category', sorter: {multiple: 1}},
	{title: '단체이름', dataIndex: 'group_name', sorter: {multiple: 1}},
	{title: '배번', dataIndex: 'bib', sorter: {multiple: 1}},
	{title: '입금자명', dataIndex: 'depositor', sorter: {multiple: 1}},
	{title: '생년월일', dataIndex: 'birth', sorter: {multiple: 1}},
	{title: '종목', dataIndex: 'course', sorter: {multiple: 1}},
	{title: '기념품', dataIndex: 'course', sorter: {multiple: 1}},
	{title: '신청일', dataIndex: 'created', sorter: {multiple: 1}},
];
