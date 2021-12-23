import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';

  collection = [
    {name: 'Mark', age: 41, city: 'San Diego'},
    {name: 'Trevis', age: 38, city: 'San Diego'},
    {name: 'Tom', age: 40, city: 'San Diego'},
  ];
}
