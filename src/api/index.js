import axios from 'axios';
import {apiErrorParser} from '../util';
import {API, TOKEN as token} from '../config';

export const defaultApi = async ({
	data,
	params,
	url,
	method,
	raiseError = true,
	isRaw = false,
	responseType,
}) => {
	try {
		let res = await axios({
			method,
			url: `${API}${url}`,
			data,
			params,
			responseType,
		});
		if (isRaw) {
			return res;
		}
		return {isSuccess: true, status: res.status, data: res.data};
	} catch (e) {
		if (raiseError) {
			apiErrorParser(e);
		}
		return {isSuccess: false, status: e.status, data: e.data};
	}
};

export const postPersonParticipation = async ({
	name,
	phone,
	gender,
	course,
	gift,
	birth,
	depositor,
	post_number,
	address,
	detail_address,
}) => {
	let data = {
		token,
		depositor,
		post_number,
		address,
		detail_address,
		participation: {
			name,
			gender,
			course,
			gift,
			phone,
			birth,
		},
	};
	return await defaultApi({
		data,
		url: '/participations/person/',
		method: 'POST',
	});
};

export const getListPersonParticipation = async ({name, birth}) => {
	let params = {
		name,
		birth,
		token,
	};

	return await defaultApi({
		params,
		url: '/participations/person/',
		method: 'GET',
	});
};

export const updatePersonParticipation = async ({
	id,
	name,
	phone,
	gender,
	course,
	gift,
	birth,
	depositor,
	post_number,
	address,
	detail_address,
	email,
}) => {
	let data = {
		token,
		depositor,
		post_number,
		address,
		detail_address,
		email,
		participation: {
			name,
			phone,
			gender,
			course,
			gift,
			birth,
		},
	};
	return await defaultApi({
		url: `/participations/person/${id}/`,
		data,
		method: 'PUT',
	});
};

export const postGroupParticipation = async ({
	name,
	representative,
	birth,
	phone,
	depositor,
	post_number,
	address,
	detail_address,
	participation,
}) => {
	let data = {
		token,
		name,
		representative,
		birth,
		phone,
		depositor,
		post_number,
		address,
		detail_address,
		participation,
	};
	return await defaultApi({
		data,
		url: '/participations/group/',
		method: 'POST',
	});
};

export const getListGroupParticipation = async ({
	name,
	representative,
	phone,
	verification,
}) => {
	let params = {
		name,
		representative,
		phone,
		token,
		verification,
	};

	return await defaultApi({
		params,
		url: '/participations/group/',
		method: 'GET',
	});
};

export const updateGroupParticipation = async ({
	id,
	name,
	representative,
	phone,
	birth,
	post_number,
	address,
	detail_address,
	depositor,
	email,
	participation,
}) => {
	let data = {
		token,
		name,
		representative,
		phone,
		birth,
		post_number,
		address,
		detail_address,
		depositor,
		email,
		participation,
	};

	return await defaultApi({
		data,
		url: `/participations/group/${id}/`,
		method: 'PUT',
	});
};

export const postVolunteer = async ({
	name,
	participated,
	school,
	grade,
	class_name,
	volunteer_id,
	birth,
	phone,
}) => {
	let data = {
		token,
		name,
		birth,
		phone,
		participated,
		school_name: school,
		grade,
		class_name: class_name,
		volunteer_id,
	};

	return await defaultApi({
		data,
		url: '/participations/volunteer/',
		method: 'POST',
	});
};

export const getListVolunteer = async ({name, phone}) => {
	let params = {
		name,
		phone,
		token,
	};
	return await defaultApi({
		params,
		url: '/participations/volunteer/',
		method: 'GET',
	});
};

export const updateVolunteer = async ({
	id,
	name,
	participated,
	school_name,
	grade,
	class_name,
	volunteer_id,
	birth,
	phone,
}) => {
	let data = {
		token,
		name,
		participated,
		school_name,
		grade,
		class_name,
		volunteer_id,
		birth,
		phone,
	};

	return await defaultApi({
		url: `/participations/volunteer/${id}/`,
		method: 'PUT',
		data,
	});
};
