import { Component, OnInit } from '@angular/core';

import { BytesPipe } from './pipes/bytes.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pro';

  filesMappedByPipe: Array<any>;

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

  constructor(private bytesPipe: BytesPipe) {}

  ngOnInit(): void {
      this.filesMappedByPipe = this.files.map(file => {
        return {...file, size: this.bytesPipe.transform(file.size)};
      });
  }
}
