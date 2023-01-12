import { Component } from '@angular/core';
import { UserModel } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pro';

  onSubmitted(user: UserModel) {
    console.log(user);
  }
}
