import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MessageComponent } from '../../components/message/message.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContainerComponent } from '../../components/container/container.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-favorites-pokemon',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    CommonModule,
    MessageComponent
  ],
  templateUrl: './favorites-pokemon.component.html',
  styleUrl: './favorites-pokemon.component.css'
})
export class FavoritesPokemonComponent {

  pokemon:any = {};
  pokemons: any[] = [];

  indShowMessage:boolean = false;
  message:string = '';

   constructor(
    private apiService: ApiService,
    private router: Router,
  ){
    this.pokemons = this.apiService.getFavorites();
  }

  detalharPokemon(id :any, name:any){
     this.router.navigate(['/detalhes-pokemon', id, name], { queryParams: { origin: 'favoritos-pokemon'}});
  }

  removeToFavorite(item: any){
    this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== item.id);
    this.apiService.removeFavorite(item);  
    this.message = "Your Pokémon has been removed from favorites!";
    this.indShowMessage = true;
     setTimeout(() => {
        this.indShowMessage = false;
      }, 5000);
  }

}
