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

export const signInThunk = async (obj) => {
    try{
    await axios.post(`${host}/auth/login`, {email: obj.email, password: obj.password})
    }catch(err){
    console.log(err)}
}