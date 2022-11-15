import {defaultApi} from './index';
import {TOKEN as token} from '../config';

export const getListParticipation = async ({page, search}) => {
	let params = {
		token,
		page,
		search,
	};

	return await defaultApi({params, url: '/participations/', method: 'GET'});
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

export const exportParticipation = async () => {};

export const exportGroup = async () => {};

export const exportVolunteer = async () => {};
