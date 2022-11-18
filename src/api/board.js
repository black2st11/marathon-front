import {defaultApi} from './index';
import {TOKEN as token} from '../config';

export const postBoard = async ({
	author,
	title,
	password,
	content,
	category,
	files,
}) => {
	const formData = new FormData();
	formData.append('token', token);
	formData.append('category', category);
	formData.append('author', author);
	formData.append('title', title);
	formData.append('password', password);
	formData.append('content', content);
	files.forEach((file) => {
		formData.append('files', file);
	});

	let headers = {'Content-Type': 'multipart/form-data'};

	return await defaultApi({
		data: formData,
		url: `/boards/`,
		method: 'POST',
		headers,
	});
};

export const getListBoard = async ({category, page}) => {
	let params = {
		category,
		page,
		token,
	};

	return await defaultApi({params, url: `/boards`, method: 'GET'});
};

export const getBoard = async ({id, password, category}) => {
	let params = {
		category,
		token,
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
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
		verification: '3bf440f1-5e05-4ff1-a2b0-2e3c933fd5b2',
	};

	return await defaultApi({url: `/boards/${id}/`, data, method: 'DELETE'});
};
