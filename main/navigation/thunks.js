import axios from 'axios'
import {host} from '../../secrets'

export const userThunk = async () => {
    const {data} = await axios.get(`${host}/api/users`)
    return data
}