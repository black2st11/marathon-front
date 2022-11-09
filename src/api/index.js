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

        return res
    } catch (e) {
        console.log(e)
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