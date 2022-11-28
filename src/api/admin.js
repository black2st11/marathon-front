import {defaultApi} from './index';
import {TOKEN as token} from '../config';
import {exportFileDownload} from '../util/generator';

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
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
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
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
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

export const updatePerson = async ({id, body}) => {
	let data = {
		...body,
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/person/${id}/`,
		method: 'PUT',
	});
};

export const updateGroup = async ({id, body}) => {
	let data = {
		...body,
		token,
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
	let verification = sessionStorage.getItem('verification');
	let params = {
		token,
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
	};

	return await defaultApi({params, url: `/info/`, method: 'GET'});
};

export const updateInfo = async ({id, name, started, ended}) => {
	let data = {
		name,
		started,
		ended,
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
		token,
	};

	return await defaultApi({data, url: `/info/${id}/`, method: 'PUT'});
};

export const getModals = async ({active}) => {
	let params = {
		token,
		active,
	};

	return await defaultApi({params, url: `/info/modals/`, method: 'GET'});
};

export const createModal = async ({image}) => {
	let verification = '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2';
	let data = {
		image,
		token,
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
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
