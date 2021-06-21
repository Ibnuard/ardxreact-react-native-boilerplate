import axios from 'axios'
import { BASE_URL } from './env'

export const fetchApi = async (url = '', method = 'post', body = {}, customHeader = {}, timeout = 5000) => {
    console.log('fetching : ' + BASE_URL + url)
    return axios({
        method: method,
        url: `${BASE_URL}${url}`,
        timeout: timeout,
        headers: {
            ...customHeader,
            'Content-type': 'Application/json',
            Accept: 'Application/json',
        },
        data: method == 'get' ? '' : body,
    })
}