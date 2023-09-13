import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  template: `
    <div class="flex bg-[url('assets/img/logindescbackground.jpg')]">
      <app-sidebar class="" />
      <div class="w-full h-screen">
        <router-outlet />
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
