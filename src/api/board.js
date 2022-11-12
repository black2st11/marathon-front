import {defaultApi} from './index';
import {TOKEN as token} from '../config';

export const postBoard = async ({
	author,
	title,
	password,
	content,
	category,
}) => {
	let data = {
		token,
		category,
		author,
		title,
		password,
		content,
	};

	await defaultApi({data, url: `/boards/`, method: 'POST'});
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
	};

	return await defaultApi({params, url: `/boards/${id}/`, method: 'GET'});
};
