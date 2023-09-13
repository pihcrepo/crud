import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { data } from '../models/user';
@Component({
  selector: 'test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input
      type="text"
      name="username"
      placeholder="username"
      [(ngModel)]="username"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      [(ngModel)]="password"
      required
    />

    <button (click)="onSubmit()">login</button>
  `,
})
export class TestComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);

    const a = data.find((e) => e.name == this.username);
    if (a) {
      this.router.navigate(['/']);
    } else {
      alert('wrong username');
    }

    console.log(a);
  }
}
