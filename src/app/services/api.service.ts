import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private url = 'https://pokeapi.co/api/v2';
  private favoritesKey = 'favorites';

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

  getFavorites(): any[] {
    const favoritesString = localStorage.getItem(this.favoritesKey);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  addFavorite(item: any): void {
    const favorites = this.getFavorites();
    const isDuplicate = favorites.some(fav => fav.id === item.id);

    if (!isDuplicate) {
      item.isFavorited = true;
      favorites.push(item);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }


  removeFavorite(item: any): void {
    item.isFavorited = false;
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== item.id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }
  
}
