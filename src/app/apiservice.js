import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080/v1'
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, objeto)
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl)
    }
}

export default ApiService