import axios from 'axios'

const BASE_URL = 'http://localhost:8000'
const token = '961ab6aa-95f2-4447-98d3-c92b70f87061'

const defaultApi = async ({ data, params, url, method }) => {
    try {
        let res = await axios({
            method,
            url: `${BASE_URL}${url}`,
            data,
            params
        })

        return { isSuccess: true, status: res.status, data: res.data }
    } catch (e) {
        console.log(e)
        return { isSuccess: false, status: e.status, data: e.data }
    }
}


export const postPersonParticipation = async ({
    name, phone, gender, course, gift, birth, depositor, post_number, address, detail_address
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
            birth
        }
    }
    return await defaultApi({ data, url: '/participations/person/', method: 'POST' })
}

export const getListPersonParticipation = async ({
    name, birth
}) => {
    let params = {
        name, birth, token
    }

    return await defaultApi({ params, url: "/participations/person/", method: 'GET' })
}

export const updatePersonParticipation = async ({
    id, name, phone, gender, course, gift, birth, depositor, post_number, address, detail_address, email
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
            birth
        }
    }
    return await defaultApi({ url: `/participations/person/${id}/`, data, method: 'PUT' })
}

export const postGroupParticipation = async ({
    group_name, representative_name, birth, phone, depositor, post_number, address, detail_address, participation
}) => {
    let data = {
        token,
        name: group_name,
        representative: representative_name,
        birth,
        phone,
        depositor,
        post_number,
        address,
        detail_address,
        participation
    }
    return await defaultApi({ data, url: '/participations/group/', method: 'POST' })
}

export const getListGroupParticipation = async ({
    name, representative, phone
}) => {
    let params = {
        name,
        representative,
        phone,
        token
    }

    return await defaultApi({ params, url: '/participations/group/', method: 'GET' })
}

export const postVolunteer = async ({
    name, participated, school, grade, class_name, volunteer_id, birth, phone
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
        volunteer_id
    }

    return await defaultApi({ data, url: '/participations/volunteer/', method: 'POST' })
}

export const getListVolunteer = async ({
    name, phone
}) => {
    let params = {
        name,
        phone,
        token
    }
    return await defaultApi({ params, url: '/participations/volunteer/', method: 'GET' })
}

export const updateVolunteer = async ({
    id, name, participated, school_name, grade, class_name, volunteer_id, birth, phone
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
        phone
    }

    return await defaultApi({ url: `/participations/volunteer/${id}/`, method: 'PUT', data })
}