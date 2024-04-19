import { Component } from '@angular/core';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {

}
