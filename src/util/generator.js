export const generateAdminParticipationTable = ({
	participations = [],
	depositApi,
	deleteApi,
	recoverApi,
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
