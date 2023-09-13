import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from '../components/login/template.component';
import { TypeComponent } from '../components/login/type.component';
import { BtnComponent } from '../components/login/btn.component';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    TemplateComponent,
    TypeComponent,
    BtnComponent,
  ],
  template: `
    <app-template title="Change password">
      <div class="flex flex-col gap-5">
        <app-type src="lock.svg">
          <input
            [type]="showpassword ? 'password' : 'text'"
            [(ngModel)]="oldPassword"
            class="bg outline-none bg-gray w-full"
            placeholder="Old password"
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
            [(ngModel)]="newPassword"
            class="bg outline-none bg-gray w-full"
            placeholder="New password"
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
            [(ngModel)]="newPasswordConfirm"
            class="bg outline-none bg-gray w-full"
            placeholder="Confirm new password"
          />
          <img
            src="assets/{{ showpassword ? 'eye' : 'eyeslash' }}.svg"
            alt=""
            class="w-5 h-5"
            (click)="toggleShowPassword()"
          />
        </app-type>
      </div>

      <app-btn btnTitle="Confirm" (click)="onSubmit()" />
    </app-template>
  `,
  styles: [],
})
export class ChangepasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  newPasswordConfirm: string = '';
  showpassword = false;

  onSubmit() {
    console.log(`old password: ${this.oldPassword}`);
    console.log(`new password: ${this.newPassword}`);
    console.log(`new password confirm: ${this.newPasswordConfirm}`);
  }
  toggleShowPassword() {
    this.showpassword = !this.showpassword;
  }
}
