import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  template: `
    <h1>My App</h1>
    <app-functionality-input (functionalityAdded)="onFunctionalityAdded($event)"></app-functionality-input>
    <ul>
      <li *ngFor="let functionality of functionalities">{{functionality.name}}</li>
    </ul>
  `
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
