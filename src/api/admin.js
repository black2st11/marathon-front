import {defaultApi} from './index';
import {TOKEN as token} from '../config';
import {exportFileDownload} from '../util/generator';

export const getListParticipation = async ({page, search, filter}) => {
	let params = {
		token,
		page,
		search,
		...filter,
	};

	return await defaultApi({params, url: '/participations/', method: 'GET'});
};

export const getListDeletedParticipation = async ({page, search}) => {
	let params = {
		token,
		page,
		search,
	};

	return await defaultApi({
		params,
		url: '/participations/deleted/',
		method: 'GET',
	});
};

export const getListVolunteer = async ({page, search, filter}) => {
	let params = {
		token,
		page,
		search,
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

export const getListGroup = async ({page, search}) => {
	let params = {
		page,
		search,
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
