import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPokemonComponent } from './catalog-pokemon.component';

describe('CatalogPokemonComponent', () => {
  let component: CatalogPokemonComponent;
  let fixture: ComponentFixture<CatalogPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
