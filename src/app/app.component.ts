import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CatalogPokemonComponent } from './pages/catalog-pokemon/catalog-pokemon.component';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { FavoritesPokemonComponent } from './pages/favorites-pokemon/favorites-pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CatalogPokemonComponent,
    DetailsPokemonComponent,
    FavoritesPokemonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokeapi';
}
