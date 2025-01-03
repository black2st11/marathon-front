import {defaultApi} from './index';
import {TOKEN as token} from '../config';
import {exportFileDownload} from '../util/generator';

let verification = sessionStorage.getItem('verification');

export const getListParticipation = async ({
	page,
	search,
	filter,
	ordering,
}) => {
	let params = {
		token,
		page,
		search,
		ordering,
		...filter,
	};

	return await defaultApi({params, url: '/participations/', method: 'GET'});
};

export const getListDeletedParticipation = async ({page, search, ordering}) => {
	let params = {
		token,
		page,
		search,
		ordering,
	};

	return await defaultApi({
		params,
		url: '/participations/deleted/',
		method: 'GET',
	});
};

export const getListVolunteer = async ({page, search, filter, ordering}) => {
	let params = {
		token,
		page,
		search,
		ordering,
		...filter,
		verification,
	};

	return await defaultApi({
		params,
		url: '/participations/volunteer/',
		method: 'GET',
	});
};

export const getPerson = async ({id}) => {
	let params = {
		token,
	};

	return await defaultApi({
		params,
		url: `/participations/person/${id}/`,
		method: 'GET',
	});
};

export const getListGroup = async ({page, search, ordering}) => {
	let params = {
		page,
		search,
		ordering,
		token,
		verification,
	};
	return await defaultApi({
		params,
		url: `/participations/group/`,
		method: 'GET',
	});
};

export const getGroup = async ({id}) => {
	let params = {
		token,
	};

	return await defaultApi({
		params,
		url: `/participations/group/${id}/`,
		method: 'GET',
	});
};

export const getVolunteer = async ({id}) => {
	let params = {
		token,
	};

	return await defaultApi({
		params,
		url: `/participations/volunteer/${id}/`,
		method: 'GET',
	});
};

export const updatePerson = async ({id, body, verification}) => {
	let data = {
		...body,
		token,
		verification,
	};

	return await defaultApi({
		data,
		url: `/participations/person/${id}/`,
		method: 'PUT',
	});
};

export const updateGroup = async ({id, body, verification}) => {
	let data = {
		...body,
		token,
		verification,
	};

	return await defaultApi({
		url: `/participations/group/${id}/`,
		data,
		method: 'PUT',
	});
};

export const setDepositParticipation = async ({id}) => {
	let data = {
		token,
	};
	return await defaultApi({
		data,
		url: `/participations/${id}/set_deposit/`,
		method: 'POST',
	});
};

export const setDepositParticipations = async ({ids, is_deposit}) => {
	let data = {
		token,
		ids,
		is_deposit,
	};

	return await defaultApi({
		data,
		url: '/participations/set_deposits/',
		method: 'POST',
	});
};

export const tempDeleteParticipation = async ({id}) => {
	let data = {
		token,
	};
	return await defaultApi({
		data,
		url: `/participations/${id}/set_temp_delete/`,
		method: 'DELETE',
	});
};

export const tempDeleteParticipations = async ({ids}) => {
	let data = {
		token,
		ids,
	};

	return await defaultApi({
		data,
		url: `/participations/deletes/`,
		method: 'DELETE',
	});
};

export const recoverParticipation = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/deleted/${id}/set_recover/`,
		method: 'POST',
	});
};

export const recoverParticipations = async ({ids}) => {
	let data = {
		token,
		ids,
	};
	return await defaultApi({
		data,
		url: `/participations/deleted/recovers/`,
		method: 'POST',
	});
};

export const deleteParticipation = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/deleted/${id}/set_delete/`,
		method: 'DELETE',
	});
};

export const deleteParticipations = async ({ids}) => {
	let data = {
		token,
		ids,
	};

	return await defaultApi({
		data,
		url: `/participations/deleted/deletes/`,
		method: 'DELETE',
	});
};

export const deleteGroup = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/group/${id}/`,
		method: 'DELETE',
	});
};

export const setGroupDeposit = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/group/${id}/set_deposit/`,
		method: 'POST',
	});
};

export const setGroupDeposits = async ({ids, is_deposit}) => {
	let data = {
		token,
		ids,
		is_deposit,
	};

	return await defaultApi({
		data,
		url: `/participations/group/set_deposits/`,
		method: 'POST',
	});
};

export const deleteGroups = async ({ids}) => {
	let data = {
		token,
		ids,
	};

	return await defaultApi({
		data,
		url: `/participations/group/deletes/`,
		method: 'DELETE',
	});
};

export const deleteVolunteer = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/volunteer/${id}/`,
		method: 'DELETE',
	});
};

export const deleteVolunteers = async ({ids}) => {
	let data = {
		token,
		ids,
	};

	return await defaultApi({
		data,
		url: `/participations/volunteer/deletes`,
		method: 'DELETE',
	});
};

export const exportParticipation = async ({
	fields,
	order,
	category,
	is_deposit,
}) => {
	let data = {
		token,
		fields,
		order,
		category,
		is_deposit,
	};

	let res = await defaultApi({
		data,
		url: `/participations/export/`,
		method: 'POST',
		responseType: 'blob',
		isRaw: true,
	});

	exportFileDownload(res);
};

export const exportGroup = async ({fields, order, is_deposit}) => {
	let data = {
		fields,
		order,
		is_deposit,
		token,
	};
	let res = await defaultApi({
		data,
		url: `/participations/group/export/`,
		method: 'POST',
		responseType: 'blob',
		isRaw: true,
	});
	exportFileDownload(res);
};

export const exportVolunteer = async ({fields, order}) => {
	let data = {
		fields,
		order,
		token,
	};

	let res = await defaultApi({
		data,
		url: `/participations/volunteer/export/`,
		method: 'POST',
		isRaw: true,
		responseType: 'blob',
	});
	exportFileDownload(res);
};

export const getInfo = async () => {
	let params = {
		token,
		verification,
	};

	return await defaultApi({params, url: `/info/`, method: 'GET'});
};

export const updateInfo = async ({id, name, started, ended}) => {
	let data = {
		name,
		started,
		ended,
		verification,
		token,
	};

	return await defaultApi({data, url: `/info/${id}/`, method: 'PUT'});
};

export const getModals = async ({isAdmin}) => {
	let params = {
		token,
		verification: isAdmin ? verification : '',
	};

	return await defaultApi({params, url: `/info/modals/`, method: 'GET'});
};

export const createModal = async ({image}) => {
	let data = {
		image,
		token,
		verification,
	};

	const formData = new FormData();
	formData.append('token', token);
	formData.append('verification', verification);
	formData.append('image', image);

	let headers = {'Content-Type': 'multipart/form-data'};

	return await defaultApi({
		data,
		url: `/info/modals/`,
		method: 'POST',
		headers,
	});
};

export const updateModal = async ({is_active, id}) => {
	let data = {
		token,
		is_active,
	};

	return await defaultApi({
		data,
		url: `/info/modals/${id}/`,
		method: 'PATCH',
	});
};

export const deleteModal = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/info/modals/${id}/`,
		method: 'DELETE',
	});
};

export const postRecord = async ({
	id,
	return_record,
	record,
	participation_id,
}) => {
	let data = {
		return_record,
		record,
		participation_id,
	};
	console.log(data);
	console.log(id);
	if (id) {
		return await defaultApi({
			data,
			url: `/participations/record/${id}/`,
			method: 'PUT',
		});
	} else {
		return await defaultApi({
			data,
			url: `/participations/record/`,
			method: 'POST',
		});
	}
};

export const getUser = async ({id}) => {
	let params = {
		verification,
		token,
	};

	return await defaultApi({
		params,
		url: `/info/users/${id}/`,
		method: 'GET',
	});
};

export const getUserList = async () => {
	let params = {
		verification,
		token,
	};

	return await defaultApi({
		params,
		url: '/info/users/',
		method: 'GET',
	});
};

export const createUser = async ({username, password, name}) => {
	let data = {
		verification,
		token,
		username,
		password,
		name,
	};

	return await defaultApi({
		data,
		url: '/info/users/',
		method: 'POST',
	});
};

export const updateUser = async ({username, name, id}) => {
	let data = {
		token,
		verification,
		username,
		name,
	};

	return await defaultApi({
		data,
		url: `/info/users/${id}/`,
		method: 'PATCH',
	});
};

export const deleteUser = async ({id}) => {
	let data = {
		token,
		verification,
	};

	return await defaultApi({
		data,
		url: `/info/users/${id}/`,
		method: 'DELETE',
	});
};

export const setPassword = async ({id, password}) => {
	let data = {
		password,
		token,
		verification,
	};

	return await defaultApi({
		data,
		url: `/info/users/${id}/set_password/`,
		method: 'POST',
	});
};

export const verityVerification = async () => {
	let params = {
		token,
		verification,
	};

	return await defaultApi({
		params,
		url: `/info/users/verify/`,
		method: 'GET',
	});
};

export const login = async ({password, username}) => {
	let data = {
		token,
		username,
		password,
	};

	return await defaultApi({
		data,
		url: `/info/users/login/`,
		method: 'POST',
		raiseError: false,
	});
};
