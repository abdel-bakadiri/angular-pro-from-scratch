import { ChildViewComponentComponent } from './../child-view-component/child-view-component.component';
import { RememberComponent } from './../remember/remember.component';
import { UserModel } from './../user';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Output() submitted: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  @ContentChild(RememberComponent) remember!: RememberComponent;
  // @ContentChildren(RememberComponent)
  // contentChildren!: QueryList<RememberComponent>;
  @ViewChild(ChildViewComponentComponent)
  viewChild!: ChildViewComponentComponent;
  isShowMessage!: boolean;
  constructor() {}

  ngAfterViewInit(): void {
    // if (this.viewChild) {
    //   this.viewChild.days = 30;
    // }
    // setTimeout(() => {
    //   if (this.viewChild) {
    //     this.viewChild.days = 30;
    //   }
    // }, 0);
  }

  ngAfterContentInit(): void {
    if (this.viewChild) {
      this.viewChild.days = 30;
    }
    if (this.remember) {
      this.remember.isRemember.subscribe(
        (checked) => (this.isShowMessage = checked)
      );
    }
  }

  onSubmit(value: UserModel) {
    this.submitted.emit(value);
  }

  ngOnInit(): void {
    // this.viewChild.days = 30;
    console.log('ngOnInit', this.viewChild);
  }
  onIsRememberToggle() {
    this.isShowMessage = true;
  }
}
