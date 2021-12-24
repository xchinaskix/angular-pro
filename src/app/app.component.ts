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
    {name: 'Travis', age: 38, city: 'San Diego'},
    {name: 'Tom', age: 40, city: 'San Diego'},
  ];

  files = [
    {name: 'mark', type: 'jpg', size: 24367},
    {name: 'tom', type: 'webp', size: 343344},
    {name: 'travis', type: 'svg', size: 43764445}
  ];
}
