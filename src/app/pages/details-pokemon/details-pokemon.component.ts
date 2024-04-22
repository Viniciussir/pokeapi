import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { firstValueFrom } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContainerComponent } from '../../components/container/container.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-details-pokemon',
  standalone: true,
  imports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    RouterLink
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
    
    this.carregarInformacoesPokemon(this.id);
    this.carregarInfo(this.id);
  }

  async carregarInformacoesPokemon(id: number) {
    try {
      const observable = this.apiService.obterInformacoesPokemon(id);
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
      console.error('Erro ao carregar informações do Pokémon:', error);
    }
  }

  async carregarInfo(id: number) {
    try {
      const observable = this.apiService.obterInfo(id);
      const data = await firstValueFrom(observable);
      this.caracteristicas = data.descriptions.find((stat: any) => stat.language.name === 'en').description;
    } catch (error) {
      console.error('Erro ao carregar info do Pokémon:', error);
    }
  }

  return(){
    if(this.origin == "listagem-pokemon"){
      this.router.navigate(['/listagem-pokemon']);
    } else {
      this.router.navigate(['/favoritos-pokemon']);
    }
  }

}
