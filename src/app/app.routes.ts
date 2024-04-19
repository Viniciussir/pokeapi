import { Routes } from '@angular/router';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';

export const routes: Routes = [
     {
        path: "",
        redirectTo:'/listagem-pokemon',
        pathMatch: 'full'
    },
    {
        path: "listagem-pokemon",
        component: ListagemComponent
    },
    {
        path: "detalhes-pokemon/:id/:name",
        component:  DetalhesComponent
    },
    {
        path: "favoritos-pokemon",
        component:  FavoritosComponent
    }
];
