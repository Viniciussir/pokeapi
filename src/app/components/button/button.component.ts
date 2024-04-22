import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() name: string = '';
  @Input() indDisabled: boolean = false;

  @Output() action = new EventEmitter<void>();

  constructor() { }

  click(): void {
    this.action.emit();
  }

}
