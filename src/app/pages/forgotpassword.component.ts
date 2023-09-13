import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from '../components/login/template.component';
import { TypeComponent } from '../components/login/type.component';
import { BtnComponent } from '../components/login/btn.component';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    TemplateComponent,
    TypeComponent,
    BtnComponent,
  ],
  template: `
    <app-template title="Forgot password">
      <div class="flex flex-col gap-5">
        <app-type src="user.svg">
          <input
            type="text"
            [(ngModel)]="email"
            class="outline-none bg-gray"
            placeholder="Enter your email"
        /></app-type>
      </div>

      <app-btn btnTitle="Send" (click)="onSubmit()" />
      <div class="flex justify-between w-full">
        <a routerLink="/login" class="text-main">Login</a>
        <a routerLink="/signup" class="text-main">Sign up</a>
      </div>
    </app-template>
  `,
  styles: [],
})
export class ForgotpasswordComponent {
  email: string = '';

  onSubmit() {
    console.log(`email: ${this.email}`);
  }
}
