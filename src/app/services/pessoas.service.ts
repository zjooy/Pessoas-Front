import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { PessoaListar } from '../models/Pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) { }

  GetPessoas(): Observable<Response<PessoaListar[]>>{
    return this.http.get<Response<PessoaListar[]>>(this.ApiUrl);
  }

  GetPessoaId(id:number): Observable<Response<PessoaListar>>{
    return this.http.get<Response<PessoaListar>>(`${this.ApiUrl}/${id}`);
  }


  DeletePessoas(id:number | undefined): Observable<Response<PessoaListar[]>>{
    return this.http.delete<Response<PessoaListar[]>>(`${this.ApiUrl}?id=${id}`);
  }

  CriarPessoa(pessoa: PessoaListar) : Observable<Response<PessoaListar[]>>{
    return this.http.post<Response<PessoaListar[]>>(this.ApiUrl, pessoa);
  }

  PutPessoa(pessoa: PessoaListar) : Observable<Response<PessoaListar>>{
    return this.http.put<Response<PessoaListar>>(this.ApiUrl, pessoa);
  }

}
