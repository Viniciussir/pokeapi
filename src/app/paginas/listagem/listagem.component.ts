import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    RouterLink,
    ContainerComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{

  offset:number = 0;
  limit:number = 20;
  pokemon:any = {};
  pokemons: any[] = [];

  constructor(
    private apiService: ApiService
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

}
