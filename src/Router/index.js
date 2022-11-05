import { createBrowserRouter } from 'react-router-dom'
import Main from '../Pages/Main'
import { Summary, Award, Direction, Gift, Note } from '../Pages/Information'
import { Course } from '../Pages/Course'
import { Person, UpdatePerson, Group, UpdateGroup, Volunteer, UpdateVolunteer } from '../Pages/Participation'
import Check from '../Pages/Record/Check'
import { Board, BoardWrite, Boards } from '../Pages/Ground/'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/info/summary',
        element: <Summary />
    },
    {
        path: '/info/award',
        element: <Award />
    },
    {
        path: '/info/direction',
        element: <Direction />
    }
    ,
    {
        path: '/info/gift',
        element: <Gift />
    },
    {
        path: '/info/note',
        element: <Note />
    },
    {
        path: '/course',
        element: <Course />
    },
    {
        path: '/participation/person',
        element: <Person />
    },
    {
        path: '/participation/person-update',
        element: <UpdatePerson />
    },
    {
        path: '/participation/group',
        element: <Group />
    },
    {
        path: '/participation/group-update',
        element: <UpdateGroup />
    },
    {
        path: '/participation/volunteer',
        element: <Volunteer />
    },
    {
        path: '/participation/volunteer-update',
        element: <UpdateVolunteer />
    },
    {
        path: '/record/check',
        element: <Check />
    },
    {
        path: '/record/board',
        element: <Boards />
    },
    {
        path: '/record/board-create',
        element: <BoardWrite />
    },
    {
        path: '/ground/notify',
        element: <Boards />
    },
    {
        path: '/ground/promotion',
        element: <Boards />
    },
    {
        path: '/ground/free',
        element: <Boards />
    },
    {
        path: '/ground/refund',
        element: <Boards />
    },
    {
        path: '/ground/picture',
        element: <Boards />
    },
    {
        path: '/ground/notify/:id',
        element: <Board />
    },
    {
        path: '/ground/promotion/:id',
        element: <Board />
    },
    {
        path: '/ground/free/:id',
        element: <Board />
    },
    {
        path: '/ground/refund/:id',
        element: <Board />
    },
    {
        path: '/ground/picture/:id',
        element: <Board />
    },
    {
        path: '/ground/notify-create',
        element: <BoardWrite />
    },
    {
        path: '/ground/promotion-create',
        element: <BoardWrite />
    },
    {
        path: '/ground/free-create',
        element: <BoardWrite />
    },
    {
        path: '/ground/refund-create',
        element: <BoardWrite />
    },
    {
        path: '/ground/picture-create',
        element: <BoardWrite />
    },
])