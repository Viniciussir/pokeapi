import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() value: any = {};
  @Input() options: any[] = [];

  @Output() clickImgAction = new EventEmitter<void>();
  @Output() clickButtonAction = new EventEmitter<void>();

  constructor() { }

  clickImg(value:any): void {
    this.clickImgAction.emit(value);
  }

  clickButton(value:any): void {
    this.clickButtonAction.emit(value);
  }

}
