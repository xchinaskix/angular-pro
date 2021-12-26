import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-forms',
    styles: ['.container { display: flex; }'],
    template: `
        <div class="container">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div formGroupName="credentials">
                    <input type="text" autocomplete="username"
                        placeholder="Enter Your Name Here" formControlName="name">
                    <input type="password" autocomplete="current-password"
                        placeholder="Enter Your Password Here" formControlName="password">
                </div>
                <button type="submit">Send</button>

                <pre>{{ form.value | json }}</pre>
            </form>
        </div>
    `
})

export class FormsComponent {
    form = new FormGroup({
        credentials: new FormGroup({
            name: new FormControl(''),
            password: new FormControl('')
        })
    });

    onSubmit() {
        console.log('Submited: ', this.form.value);
    }
}

