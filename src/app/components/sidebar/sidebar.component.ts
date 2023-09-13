import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sidebar } from 'src/app/models/sidebar';
import { BarComponent } from './bar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, BarComponent],
  template: `
    <div
      class="{{
        showmore
          ? 'absolute md:w-screen h-screen bg-[#0a0a0a] opacity-25 z-40'
          : 'w-0'
      }}"
      (click)="toggle()"
    ></div>
    <img
      src="assets/img/menu.png"
      alt=""
      class="m-3 w-10 h-10 cursor-pointer hover:scale-105"
      [class]="showmore ? ' hidden' : ''"
      (click)="toggle()"
    />

    <div
      class="flex flex-col w-[315px] h-screen bg-white text-tabletext pl-3 rounded-tr-xl transition-all md:absolute md:top-0 md:left-0 md:z-50"
      [class]="showmore ? '' : 'xl:hidden md:w-0 md:overflow-x-hidden'"
    >
      <div class="flex items-center">
        <span class="py-8 text-3xl w-full text-center text-main text font-bold"
          >COMPANY</span
        >
        <div class="">
          <img
            src="assets/leftchevron.svg"
            alt=""
            class="w-8 h-8 cursor-pointer hover:scale-125"
            (click)="toggle()"
          />
        </div>
      </div>

      <app-bar *ngFor="let e of data.data" [e]="e">
        <app-bar *ngFor="let e of e.subMenuList" [e]="e">
          <app-bar *ngFor="let e of e.subMenuList" [e]="e">
            <app-bar *ngFor="let e of e.subMenuList" [e]="e">
              <app-bar *ngFor="let e of e.subMenuList" [e]="e">
                <app-bar *ngFor="let e of e.subMenuList" [e]="e"> </app-bar>
              </app-bar>
            </app-bar>
          </app-bar>
        </app-bar>
      </app-bar>
    </div>
  `,
})
export class SidebarComponent {
  showmore: boolean = false;
  toggle() {
    this.showmore = !this.showmore;
  }

  data: any = sidebar;

  showSubMenu = false;
  toggleSubMenu(item: any): void {
    item.showSubMenu = !item.showSubMenu;
  }
}
