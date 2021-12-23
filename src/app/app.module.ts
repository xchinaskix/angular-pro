import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomStructureDirective } from './directives/custom-structure.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomStructureDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
