import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  //criando um atributo privado tipado como string para receber a apiUrl do nosso ambiente
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // se tratando de um servico de listar promocoes, criei o metodo listar()
  // <> pq ele é do Generics do typescript (parecido com do c#). Em seu interior o Promocao pq é o tipo, e como esse tipo é uma coleção colocamos o []
  listar() : Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`)
  } 
}

// por meio dessa configuração, conseguiremos realizar uma requisição HTTP
