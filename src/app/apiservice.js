import axios from 'axios';

const httpClient = axios.create({
    //baseURL: 'http://localhost:8080'
   baseURL: 'http://adr-ordemservico.herokuapp.com'
});

class ApiService {
    //Passar o mapeamento do construtor (/servidores)
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, objeto){
        return httpClient.post(this.requestUrl(url), objeto);
    }

    put(url, objeto){
        return httpClient.put(this.requestUrl(url), objeto);
    }

    delete(url){
        return httpClient.delete(this.requestUrl(url));
    }

    get(url){
        return httpClient.get(this.requestUrl(url));
    }

    requestUrl(url){
        return `${this.apiurl}${url}`;
    }
}

export default ApiService;
