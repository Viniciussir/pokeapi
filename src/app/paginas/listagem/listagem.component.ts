import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { MessageComponent } from '../../componentes/message/message.component';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    RouterLink,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    MessageComponent
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{

  offset:number = 0;
  limit:number = 20;
  pokemon:any = {};
  pokemons: any[] = [];

  isFavorited:boolean = false;

  indShowMessage:boolean = false;
  message:string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
  ){
  }
  
  ngOnInit(){
    this.carregarListaPokemons(this.offset,this.limit);
  }

  async carregarListaPokemons(offset: number, limit:number) {
    try {
      this.pokemons = [];
      this.offset = offset;
      this.limit = limit;
      const observable = this.apiService.obterListaPokemon(offset, limit);
      const data = await firstValueFrom(observable);
      for (const pokemon of data.results) {
        const pokemonNumber = parseInt(pokemon.url.split('/').filter(Boolean).pop());
        if (pokemonNumber) {
          const pokemonData = {
            name: pokemon.name,
            id: pokemonNumber
          };
          this.pokemons.push(pokemonData);
          await this.carregarImagemPokemon(pokemonNumber);
          this.updateFavoritesStatus(this.pokemons);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar Pokémon:', error);
    }
  }

  async carregarMaisPokemons(offset: number, limit:number) {
    try {
      this.offset = offset + 20;
      this.limit = limit;
      const observable = this.apiService.obterListaPokemon(this.offset, this.limit);
      const data = await firstValueFrom(observable);
      for (const pokemon of data.results) {
        const pokemonNumber = parseInt(pokemon.url.split('/').filter(Boolean).pop());
        if (pokemonNumber) {
          const pokemonData = {
            name: pokemon.name,
            id: pokemonNumber
          };
          this.pokemons.push(pokemonData);
          await this.carregarImagemPokemon(pokemonNumber);
          this.updateFavoritesStatus(this.pokemons);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar Pokémon:', error);
    }
  }

  async carregarImagemPokemon(id: number) {
    try {
      const observable = this.apiService.obterImagemPokemon(id);
      const data = await firstValueFrom(observable);
      const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
      if (index !== -1) {
        this.pokemons[index].img = data.sprites.front_default;
      }
    } catch (error) {
      console.error('Erro ao carregar imagem do Pokémon:', error);
    }
  }

  detalharPokemon(id :any, name:any){
    this.router.navigate(['/detalhes-pokemon', id, name], { queryParams: { origin: 'listagem-pokemon'}});
  }

  checkFavorites(pokemon:any){
    if(pokemon.isFavorited){
      this.removeToFavorite(pokemon);
    } else {
      this.addToFavorites(pokemon);
    }
  }

  addToFavorites(item: any): void {
    this.apiService.addFavorite(item);
    const index = this.pokemons.findIndex(pokemon => pokemon.id === item.id);
    if (index !== -1) {
      this.pokemons[index].isFavorited = true;
    }
    this.showMessage(true);
  }

  removeToFavorite(item: any){
    this.apiService.removeFavorite(item);
    const index = this.pokemons.findIndex(pokemon => pokemon.id === item.id);
    if (index !== -1) {
      this.pokemons[index].isFavorited = false;
    }
    this.showMessage(false);
  }

  updateFavoritesStatus(itemList: any[]): void {
    const favorites = this.apiService.getFavorites();
    itemList.forEach(item => {
      item.isFavorited = favorites.some(fav => fav.id === item.id);
    });
  }

  showMessage(event:any){
    if(event){
      this.message = "Your pokemon has been favorited!";
      this.indShowMessage = true;
      setTimeout(() => {
        this.indShowMessage = false;
      }, 5000);
    } else{
      this.message = "Your Pokémon has been removed from favorites!";
      this.indShowMessage = true;
      setTimeout(() => {
        this.indShowMessage = false;
      }, 5000);
    }
  }

}
