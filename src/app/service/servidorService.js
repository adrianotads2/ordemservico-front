import ApiService from "../apiservice";

class ServidorService extends ApiService {

    constructor(){
        super('/servidores');
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }
}

export default ServidorService;