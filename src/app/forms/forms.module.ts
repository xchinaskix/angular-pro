import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';

@NgModule({
    declarations: [FormsComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [FormsComponent]
})

export class CustomFormsModule {}
