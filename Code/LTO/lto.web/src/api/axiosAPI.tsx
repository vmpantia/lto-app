import axios from 'axios'
import { API_URL } from '../model/constant'

const axiosAPI = axios.create({
    baseURL: API_URL,
    headers : {
        'Content-Type':'application/json',
        Accept: 'application/json',
    }
})

export default axiosAPI