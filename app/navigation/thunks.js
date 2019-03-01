import axios from 'axios'
import {host} from '../../secrets'

export const userThunk = async () => {
    const {data} = await axios.get(`${host}/api/users`)
    return data
}

export const oneUserThunk = async (id) => {
    const {data} = await axios.get(`${host}/api/users/${id}`)
    return data
}