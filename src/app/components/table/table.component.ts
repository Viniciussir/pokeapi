import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() hp: string = '';
  @Input() attack: string = '';
  @Input() defense: string = '';
  @Input() specialAttack: string = '';
  @Input() specialDefense: string = '';
  @Input() speed: string = '';
  @Input() types: string = '';
  @Input() characteristics: string = '';
  @Input() abilities: string = '';
}
