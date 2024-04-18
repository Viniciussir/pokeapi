import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListagemComponent,
    DetalhesComponent,
    FavoritosComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokeapi';
}
