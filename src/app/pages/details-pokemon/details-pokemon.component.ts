import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { firstValueFrom } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContainerComponent } from '../../components/container/container.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-details-pokemon',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    RouterLink,
    ButtonComponent,
    TitleComponent
  ],
  templateUrl: './details-pokemon.component.html',
  styleUrl: './details-pokemon.component.css'
})
export class DetailsPokemonComponent implements OnInit {

  id: number = 0;
  name: string = '';
  img: string = '';
  abilities: any = '';
  types: string = '';
  hp: any = '';
  attack: string = '';
  defense: string = '';
  specialAttack: string = '';
  specialDefense: string = '';
  speed: string = '';
  caracteristicas: string = '';

  origin:any = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.origin = this.route.snapshot.queryParams['origin'];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.id = Number(params['id']);
    });
    
    this.loadInformationPokemon(this.id);
    this.loadCharacteristic(this.id);
  }

  async loadInformationPokemon(id: number) {
    try {
      const observable = this.apiService.getInformationPokemon(id);
      const data = await firstValueFrom(observable);
      this.img = data.sprites.front_default;
      this.abilities = data.abilities.map((item: { ability: { name: string } }) => item.ability.name);
      this.types = data.types.map((item: { type: { name: string } }) => item.type.name);
      this.hp = data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat;
      this.attack = data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat;
      this.defense = data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat;
      this.specialAttack = data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat;
      this.specialDefense = data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat;
      this.speed = data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat;
    } catch (error) {
      console.error('Error loading Pokémon information:', error);
    }
  }

  async loadCharacteristic(id: number) {
    try {
      const observable = this.apiService.getCharacteristic(id);
      const data = await firstValueFrom(observable);
      this.caracteristicas = data.descriptions.find((stat: any) => stat.language.name === 'en').description;
    } catch (error) {
      console.error('Error loading Pokémon Characteristic:', error);
    }
  }

  return(){
    if(this.origin == "pokemon-list"){
      this.router.navigate(['/pokemon-list']);
    } else {
      this.router.navigate(['/pokemon-favorites']);
    }
  }

}
