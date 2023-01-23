import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.css'],
})
export class RememberComponent implements OnInit {
  @Output() isRemember = new EventEmitter<boolean>();
  test = "I'ma in  injected remember component";
  constructor() {}
  onChange(checkBoxValue: Event) {
    const { checked } = <HTMLInputElement>checkBoxValue.target;
    console.log('Emit checked', checked);
    this.isRemember.emit(checked);
  }
  ngOnInit(): void {}
}
