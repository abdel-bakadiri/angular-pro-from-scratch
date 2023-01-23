import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-component',
  templateUrl: './child-view-component.component.html',
  styleUrls: ['./child-view-component.component.css'],
})
export class ChildViewComponentComponent implements OnInit {
  days: number = 7;

  constructor() {}

  ngOnInit(): void {}
}
