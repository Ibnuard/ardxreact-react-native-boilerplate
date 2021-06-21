import axios from 'axios'

export const fetchApi = async (url = '', method = 'post', body = {}) => {
    return axios({
        method: method,
        url: url,
        data: body
    })
}