import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CustomStructureDirective } from './directives/custom-structure.directive';
import { BytesPipe } from './pipes/bytes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomStructureDirective,
    BytesPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [BytesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
