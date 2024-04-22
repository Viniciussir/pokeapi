import { Routes } from '@angular/router';
import { CatalogPokemonComponent } from './pages/catalog-pokemon/catalog-pokemon.component';
import { DetailsPokemonComponent } from './pages/details-pokemon/details-pokemon.component';
import { FavoritesPokemonComponent } from './pages/favorites-pokemon/favorites-pokemon.component';

export const routes: Routes = [
     {
        path: "",
        redirectTo:'/listagem-pokemon',
        pathMatch: 'full'
    },
    {
        path: "listagem-pokemon",
        component: CatalogPokemonComponent
    },
    {
        path: "detalhes-pokemon/:id/:name",
        component:  DetailsPokemonComponent
    },
    {
        path: "detalhes-pokemon",
        component:  DetailsPokemonComponent
    },
    {
        path: "favoritos-pokemon",
        component:  FavoritesPokemonComponent
    }
];
