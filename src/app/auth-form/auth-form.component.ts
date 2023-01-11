import { UserModel } from './../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Output() submitted: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  constructor() {}

  onSubmit(value: UserModel) {
    this.submitted.emit(value);
  }

  ngOnInit(): void {}
}
