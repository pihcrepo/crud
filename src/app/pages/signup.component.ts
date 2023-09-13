import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from '../components/login/template.component';
import { TypeComponent } from '../components/login/type.component';
import { BtnComponent } from '../components/login/btn.component';

@Component({
  selector: 'app-signup',
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
    <app-template title="Sign up">
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
        <app-type src="lock.svg">
          <input
            [type]="showpassword ? 'password' : 'text'"
            [(ngModel)]="passwordConfirm"
            class="bg outline-none bg-gray w-full"
            placeholder="Confirm password"
          />
          <img
            src="assets/{{ showpassword ? 'eye' : 'eyeslash' }}.svg"
            alt=""
            class="w-5 h-5"
            (click)="toggleShowPassword()"
          />
        </app-type>
      </div>
      <a routerLink="/login" class="text-main"
        ><img src="assets/back.svg" alt="" class="w-8 h-8"
      /></a>

      <app-btn btnTitle="Sign up" (click)="onSubmit()" />
    </app-template>
  `,
  styles: [],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  showpassword = false;

  onSubmit() {
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.password}`);
    console.log(`password confirm: ${this.passwordConfirm}`);
  }
  toggleShowPassword() {
    this.showpassword = !this.showpassword;
  }
}
