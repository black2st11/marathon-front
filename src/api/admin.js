import {defaultApi} from './index';
import {TOKEN as token} from '../config';
import {exportFileDownload} from '../util/generator';

export const getListParticipation = async ({page, search}) => {
	let params = {
		token,
		page,
		search,
	};

	return await defaultApi({params, url: '/participations/', method: 'GET'});
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
		url: `/participations/${id}/recover/`,
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
		url: `/participations/recovers/`,
		method: 'POST',
	});
};

export const deleteParticipation = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/${id}/`,
		method: 'DELETE',
	});
};

export const deleteGroup = async ({id}) => {
	let data = {
		token,
	};

	return await defaultApi({
		data,
		url: `/participations/${id}/`,
		method: 'DELETE',
	});
};

export const deleteGroups = async ({ids}) => {
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

export const deleteParticipations = async ({ids}) => {
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

export const exportParticipation = async ({
	fields,
	order,
	category,
	is_deposit,
}) => {
	let data = {
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

export const exportGroup = async () => {};

export const exportVolunteer = async () => {};
