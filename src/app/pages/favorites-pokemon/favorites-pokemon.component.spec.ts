import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPokemonComponent } from './favorites-pokemon.component';

describe('FavoritesPokemonComponent', () => {
  let component: FavoritesPokemonComponent;
  let fixture: ComponentFixture<FavoritesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
