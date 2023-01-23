import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RememberComponent } from './remember/remember.component';
import { ChildViewComponentComponent } from './child-view-component/child-view-component.component';

@NgModule({
  declarations: [AppComponent, AuthFormComponent, RememberComponent, ChildViewComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
