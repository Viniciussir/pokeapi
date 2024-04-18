import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    RouterLink,
    ContainerComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {

}
