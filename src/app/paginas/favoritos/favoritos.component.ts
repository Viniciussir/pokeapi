import { Component } from '@angular/core';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../componentes/message/message.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    CommonModule,
    MessageComponent
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

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
    this.message = "Your Pokémon removed from favorites!";
    this.indShowMessage = true;
     setTimeout(() => {
        this.indShowMessage = false;
      }, 5000);
  }

}
