import axios from 'axios'
import {host} from '../../secrets'

export const signInThunk = async (obj) => {
    try{
    await axios.post(`${host}/auth/login`, {email: obj.email, password: obj.password})
    }catch(err){
    console.log(err)}
}

export const userThunkSignIn = async () => {
    try{
    const {data} = await axios.get(`${host}/auth/me`)
    return data
    }catch(err){
        console.log(err)
    }
}

export const getBeers = async () => {
    try{
        const {data} = await axios.get(`${host}/api/beers`)
        return data
    }catch(err){
        console.log(err)
    }
}
