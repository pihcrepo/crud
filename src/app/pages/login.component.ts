import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from '../components/login/template.component';
import { TypeComponent } from '../components/login/type.component';
import { BtnComponent } from '../components/login/btn.component';

@Component({
  selector: 'app-login',
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
    <app-template title="Login form">
      <div class="flex flex-col gap-5">
        <app-type src="user.svg">
          <input
            type="text"
            [(ngModel)]="username"
            class="outline-none bg-gray"
            placeholder="Username"
        /></app-type>

        <app-type src="lock.svg">
          <input
            [type]="showpassword ? 'password' : 'text'"
            [(ngModel)]="password"
            class="bg outline-none bg-gray w-full"
            placeholder="Password"
          />
          <img
            src="assets/{{ showpassword ? 'eye' : 'eyeslash' }}.svg"
            alt=""
            class="w-5 h-5"
            (click)="toggleShowPassword()"
          />
        </app-type>
      </div>
      <div class="flex justify-between w-full">
        <a routerLink="/forgotpassword" class="text-main">@ Forgot password?</a>
        <a routerLink="/signup" class="text-main">Sign up</a>
      </div>

      <app-btn btnTitle="Login" (click)="onSubmit()" />
    </app-template>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showpassword = false;

  onSubmit() {
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.password}`);
  }
  toggleShowPassword() {
    this.showpassword = !this.showpassword;
  }
}
