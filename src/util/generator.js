export const generateAdminParticipationTable = ({
	participations = [],
	depositApi,
	deleteApi,
	setParticipation,
	total,
	current,
	setToggle,
	toggle,
	setSelect,
	setModal,
}) => {
	let participationForm = [];
	participations.forEach((participation, index) => {
		participationForm.push([
			{
				check: {
					onChange: () => {
						let tempParticipations = [...participations];
						tempParticipations[index].check =
							!tempParticipations[index].check;
						setParticipation(tempParticipations);
					},
					value: participation.check,
				},
			},
			{
				button: {
					onClick: () => {
						setSelect({
							id: participation.group
								? participation.group.id
								: participation.person.id,
							category: participation.group ? 'group' : 'person',
						});
						setModal(true);
					},
					text: {
						children: '수정',
						color: 'white',
					},
				},
			},
			{children: total - 10 * (current - 1) - index},
			{children: participation.name},
			{children: participation.group ? '단체' : '개인'},
			{children: participation.group ? participation.group.name : ''},
			{children: participation.bib},
			{
				children: participation.group
					? participation.group.depositor
					: participation.person.depositor,
			},
			{children: participation.birth},
			{children: participation.course},
			{children: participation.gender},
			{children: participation.phone},
			{children: participation.gift},
			{children: participation.created},
			{children: participation.is_deposit ? '입금 ' : '미입금'},

			{
				button: {
					onClick: () => {
						depositApi({id: participation.id});
						setToggle(!toggle);
					},
					text: {
						children: '입금/미입금 처리',
						color: 'white',
					},
				},
			},
			{
				button: {
					onClick: () => {
						deleteApi({id: participation.id});
						setToggle(!toggle);
					},
					text: {children: '삭제 처리', color: 'white'},
				},
			},
		]);
	});
	return participationForm;
};

export const generateAdminDeletedParticipationTable = ({
	participations = [],
	recoverApi,
	deleteApi,
	setParticipation,
	total,
	current,
	setToggle,
	toggle,
}) => {
	let participationForm = [];
	participations.forEach((participation, index) => {
		participationForm.push([
			{
				check: {
					onChange: () => {
						let tempParticipations = [...participations];
						tempParticipations[index].check =
							!tempParticipations[index].check;
						setParticipation(tempParticipations);
					},
					value: participation.check,
				},
			},
			{children: total - 10 * (current - 1) - index},
			{children: participation.name},
			{children: participation.group ? '단체' : '개인'},
			{children: participation.group ? participation.group.name : ''},
			{children: participation.bib},
			{
				children: participation.group
					? participation.group.depositor
					: participation.person.depositor,
			},
			{children: participation.birth},
			{children: participation.course},
			{children: participation.gender},
			{children: participation.phone},
			{children: participation.gift},
			{children: participation.created},
			{children: participation.is_deposit ? '입금 ' : '미입금'},
			{
				button: {
					onClick: () => {
						recoverApi({id: participation.id});
						setToggle(!toggle);
					},
					text: {
						children: '복구',
						color: 'white',
					},
				},
			},
			{
				button: {
					onClick: () => {
						deleteApi({id: participation.id});
						setToggle(!toggle);
					},
					text: {children: '삭제 처리', color: 'white'},
				},
			},
		]);
	});
	return participationForm;
};

export const generateAdminVolunteerTable = ({
	participations = [],
	deleteApi,
	setParticipation,
	total,
	current,
	setToggle,
	toggle,
	setSelect,
	setModal,
}) => {
	let participationForm = [];
	participations.forEach((participation, index) => {
		participationForm.push([
			{
				check: {
					onChange: () => {
						let tempParticipations = [...participations];
						tempParticipations[index].check =
							!tempParticipations[index].check;
						setParticipation(tempParticipations);
					},
					value: participation.check,
				},
			},
			{
				button: {
					onClick: () => {
						setSelect(participation.id);
						setModal(true);
					},
					text: {children: '수정', color: 'white'},
				},
			},
			{children: total - 10 * (current - 1) - index},
			{children: participation.name},
			{children: participation.participated},
			{children: participation.phone},
			{children: participation.birth},

			{
				children: participation.school_name,
			},
			{children: `${participation.grade}-${participation.class_name}`},
			{children: participation.volunteer_id},
			{
				button: {
					onClick: () => {
						deleteApi({id: participation.id});
						setToggle(!toggle);
					},
					text: {children: '삭제 처리', color: 'white'},
				},
			},
		]);
	});
	return participationForm;
};

export const generateAdminGroupTable = ({
	groups = [],
	depositApi,
	deleteApi,
	setGroup,
	total,
	current,
	setToggle,
	toggle,
	setSelect,
	setModal,
}) => {
	let groupForm = [];
	groups.forEach((group, index) => {
		groupForm.push([
			{
				check: {
					onChange: () => {
						let tempParticipations = [...groups];
						tempParticipations[index].check =
							!tempParticipations[index].check;
						setGroup(tempParticipations);
					},
					value: group.check,
				},
			},
			{
				button: {
					onClick: () => {
						setSelect(group.id);
						setModal(true);
					},
					text: {
						children: '수정',
						color: 'white',
					},
				},
			},
			{children: total - 10 * (current - 1) - index},
			{children: group.name},
			{children: group.representative},
			{children: group.phone},
			{children: group.post_number},
			{children: group.address},
			{children: group.detail_address},
			{children: group.deposit_count},
			{children: group.is_deposit ? '입금 ' : '미입금'},
			{
				button: {
					onClick: () => {
						depositApi({id: group.id});
						setToggle(!toggle);
					},
					text: {
						children: '입금/미입금 처리',
						color: 'white',
					},
				},
			},
			{
				button: {
					onClick: () => {
						deleteApi({id: group.id});
						setToggle(!toggle);
					},
					text: {children: '삭제 처리', color: 'white'},
				},
			},
		]);
	});
	return groupForm;
};

export const exportFileDownload = (res) => {
	const blob = new Blob([res.data]);

	const fileObjectUrl = window.URL.createObjectURL(blob);

	const link = document.createElement('a');
	link.href = fileObjectUrl;
	link.style.display = 'none';
	const extractDownloadFilename = (response) => {
		const disposition = response.headers['content-disposition'];
		const fileName = decodeURI(
			disposition
				.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
				.replace(/['"]/g, ''),
		);
		return fileName;
	};
	link.download = extractDownloadFilename(res);

	// 다운로드 파일 이름을 추출하는 함수

	// 다운로드 파일의 이름은 직접 지정 할 수 있습니다.
	// link.download = "sample-file.xlsx";

	// 링크를 body에 추가하고 강제로 click 이벤트를 발생시켜 파일 다운로드를 실행시킵니다.
	document.body.appendChild(link);
	link.click();
	link.remove();

	// 다운로드가 끝난 리소스(객체 URL)를 해제합니다.
	window.URL.revokeObjectURL(fileObjectUrl);
};

export const makeGroup = (group) => {
	let list = [];
	list.push({value: null, label: '미선택'});
	group.forEach((item) => {
		list.push({
			value: item.id,
			label: `${item.name} - ${item.representative}(${item.phone})`,
		});
	});

	return list;
};
