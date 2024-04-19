import { Component } from '@angular/core';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

}
