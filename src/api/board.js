import {defaultApi} from './index';
import {TOKEN as token} from '../config';
let verification = sessionStorage.getItem('verification');

export const postBoard = async ({
	author,
	title,
	password,
	content,
	category,
	link,
	files,
}) => {
	const formData = new FormData();
	formData.append('token', token);
	formData.append('category', category);
	formData.append('author', author);
	formData.append('link', link);
	formData.append('title', title);
	formData.append('password', password);
	formData.append('content', content);
	files.forEach((file) => {
		if (file) {
			formData.append('files', file);
		}
	});

	let headers = {'Content-Type': 'multipart/form-data'};

	return await defaultApi({
		data: formData,
		url: `/boards/`,
		method: 'POST',
		headers,
	});
};

export const getListBoard = async ({category, page, ordering, search}) => {
	let params = {
		category,
		page,
		token,
		ordering,
		search,
	};

	return await defaultApi({params, url: `/boards/`, method: 'GET'});
};

export const getBoard = async ({id, password, category}) => {
	let params = {
		category,
		token,
		verification,
	};

	return await defaultApi({params, url: `/boards/${id}/`, method: 'GET'});
};

export const checkPassword = async ({password, id}) => {
	let data = {
		password,
		token,
	};
	return await defaultApi({
		data,
		url: `/boards/${id}/checkPassword/`,
		method: 'POST',
		raiseError: false,
	});
};

export const postComment = async ({board_id, content, author}) => {
	let data = {
		board_id,
		content,
		author,
	};

	return await defaultApi({url: '/boards/comments/', data, method: 'POST'});
};

export const deleteBoard = async ({id}) => {
	let data = {
		token,
		verification,
	};

	return await defaultApi({url: `/boards/${id}/`, data, method: 'DELETE'});
};
