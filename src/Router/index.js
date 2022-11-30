import {createBrowserRouter, useLoaderData} from 'react-router-dom';
import Main from '../Pages/Main';
import {Summary, Award, Direction, Gift, Note} from '../Pages/Information';
import {Course} from '../Pages/Course';
import {
	Person,
	UpdatePerson,
	Group,
	UpdateGroup,
	Volunteer,
	UpdateVolunteer,
} from '../Pages/Participation';
import Check from '../Pages/Record/Check';
import {Board, BoardWrite, Boards} from '../Pages/Ground/';
import {
	AdminBoard,
	AdminDeletedParticipation,
	AdminGroup,
	AdminInfo,
	AdminParticipation,
	AdminVolunteer,
} from '../Pages/Admin';
import Pic from '../Pages/Ground/Pic';

const loader = async ({params}) => {
	return params;
};
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/info/summary',
		element: <Summary />,
	},
	{
		path: '/info/award',
		element: <Award />,
	},
	{
		path: '/info/direction',
		element: <Direction />,
	},
	{
		path: '/info/gift',
		element: <Gift />,
	},
	{
		path: '/info/note',
		element: <Note />,
	},
	{
		path: '/course',
		element: <Course />,
	},
	{
		path: '/participation/person',
		element: <Person />,
	},
	{
		path: '/participation/person-update',
		element: <UpdatePerson />,
	},
	{
		path: '/participation/group',
		element: <Group />,
	},
	{
		path: '/participation/group-update',
		element: <UpdateGroup />,
	},
	{
		path: '/participation/volunteer',
		element: <Volunteer />,
	},
	{
		path: '/participation/volunteer-update',
		element: <UpdateVolunteer />,
	},
	{
		path: '/record/check',
		element: <Check />,
	},
	{
		path: '/record/board',
		element: <Boards />,
	},
	{
		path: '/record/board-create',
		element: <BoardWrite />,
	},
	{
		path: '/ground/notify',
		element: <Boards category='공지' />,
	},
	{
		path: '/ground/promotion',
		element: <Boards category='홍보' />,
	},
	{
		path: '/ground/free',
		element: <Boards category='자유' />,
	},
	{
		path: '/ground/refund',
		element: <Boards category='환불' />,
	},
	{
		path: '/ground/picture',
		element: <Pic />,
	},
	{
		path: '/ground/notify/:id',
		element: <Board category='공지' />,
		loader: loader,
	},
	{
		path: '/ground/promotion/:id',
		element: <Board category='홍보' />,
		loader: loader,
	},
	{
		path: '/ground/free/:id',
		element: <Board category='자유' />,
		loader: loader,
	},
	{
		path: '/ground/refund/:id',
		element: <Board category='환불' />,
		loader: loader,
	},
	{
		path: '/ground/notify-create',
		element: <BoardWrite category='공지' />,
	},
	{
		path: '/ground/promotion-create',
		element: <BoardWrite category='홍보' />,
	},
	{
		path: '/ground/free-create',
		element: <BoardWrite category='자유' />,
	},
	{
		path: '/ground/refund-create',
		element: <BoardWrite category='환불' />,
	},
	{
		path: '/admin/participation',
		element: <AdminParticipation />,
	},
	{
		path: '/admin/info',
		element: <AdminInfo />,
	},
	{
		path: '/admin/board',
		element: <AdminBoard />,
	},
	{
		path: '/admin/volunteer',
		element: <AdminVolunteer />,
	},
	{
		path: '/admin/deleted-participation',
		element: <AdminDeletedParticipation />,
	},
	{
		path: '/admin/group',
		element: <AdminGroup />,
	},
]);
