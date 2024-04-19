import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private url = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) {}

  obterListaPokemon(offset:number, limit:number): Observable<any> {
    const url = `${this.baseUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  obterImagemPokemon(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  obterInformacoesPokemon(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  obterInfo(id: number): Observable<any> {
    const url = `${this.url}/characteristic/${id}`;
    return this.http.get<any>(url);
  }
  
}
