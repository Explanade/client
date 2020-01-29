import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'http://34.87.241.32'
})

export default instance