import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

    url = 'http://localhost:8080/pessoas';

    constructor(private http: Http) {}

    pesquisar(filtro: PessoaFiltro): Promise<any>{
        const params = new URLSearchParams();
        const headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

        
        if (filtro.nome) {
            params.set('nome', filtro.nome);
        }

        return this.http.get(this.url, { headers, search: params } )
            .toPromise()
            .then(resposta => resposta.json());
    }
    
}

export class PessoaFiltro {
    nome: string;
    pagina = 0;
    itensPorPagina = 5;
  }