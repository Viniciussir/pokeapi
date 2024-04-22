import { Routes } from '@angular/router';
import { CatalogPokemonComponent } from './pages/catalog-pokemon/catalog-pokemon.component';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { FavoritesPokemonComponent } from './pages/favorites-pokemon/favorites-pokemon.component';

export const routes: Routes = [
     {
        path: "",
        redirectTo:'/pokemon-list',
        pathMatch: 'full'
    },
    {
        path: "pokemon-list",
        component: CatalogPokemonComponent
    },
    {
        path: "pokemon-details/:id/:name",
        component:  DetailsPokemonComponent
    },
    {
        path: "pokemon-favorites",
        component:  FavoritesPokemonComponent
    }
];
