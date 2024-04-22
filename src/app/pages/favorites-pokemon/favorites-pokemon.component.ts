import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MessageComponent } from '../../components/message/message.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContainerComponent } from '../../components/container/container.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-favorites-pokemon',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    CommonModule,
    MessageComponent,
    ListComponent,
    TitleComponent
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

  detailPokemon(pokemon:any){
    this.router.navigate(['/pokemon-details', pokemon.id, pokemon.name], { queryParams: { origin: 'pokemon-favorites'}});
  }

  removeToFavorite(item: any){
    this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== item.id);
    this.apiService.removeFavorite(item);  
    this.message = "The " + item.name.charAt(0).toUpperCase() + item.name.slice(1) + " pokémon was removed from favorites.";
    this.indShowMessage = true;
    setTimeout(() => {
      this.indShowMessage = false;
    }, 5000);
  }

}
