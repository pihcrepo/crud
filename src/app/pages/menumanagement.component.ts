import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from '../models/menumanagement';

@Component({
  selector: 'app-menumanagement',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col px-16 py-5 bg-[url('assets/img/logindescbackground.jpg')] h-screen w-full  relative "
    >
      <div
        class="flex justify-between text-3xl text-main font-bold z-30 mb-5 shadow-xl rounded-xl p-5 bg-white"
      >
        User Management
        <div class="p-1 rounded-[50%] cursor-pointer hover:bg-gray">
          <img
            (click)="toggleShowSearchbar()"
            [src]="
              'assets/' + (showSearchbar ? 'showless.svg' : 'showmore.svg')
            "
            alt=""
            class="w-9 h-9"
          />
        </div>
      </div>

      <div
        [class]="
          showSearchbar
            ? 'flex justify-between items-center mb-5 shadow-xl bg-white rounded-xl px-3 h-32'
            : 'top-[-200px] ' + ' absolute transition-all'
        "
      >
        <div class="flex w-1/2 px-3">
          <div class="flex">
            <input
              type="text"
              class="outline-none w-full border-b border-gray"
              placeholder="Type something here"
            />
          </div>
          <div class="w-10 h-10 cursor-pointer hover:scale-105">
            <img src="assets/search.svg" alt="" class="w-10 h-10" />
          </div>
        </div>

        <div class="p-1 rounded-xl cursor-pointer hover:bg-gray">
          <img src="assets/upload.svg" alt="" class="w-10 h-10" />
        </div>
      </div>

      <div class="flex w-full bg-white p-5 rounded-lg">
        <table class="w-full">
          <tr class="text-main font-bold text-lg leading-[3rem]">
            <td>Menu</td>
            <td *ngFor="let col of columns" class="text-center">{{ col }}</td>
          </tr>
          <ng-container *ngFor="let e of data" class="">
            <span class="text-main font-medium text-lg leading-9">{{
              e.name
            }}</span>
            <tr
              *ngFor="let menu of e.menu"
              class="border-b border-grayline leading-9"
            >
              <td class="pl-5 text-main">{{ menu.name }}</td>
              <td *ngFor="let col of columns" class="">
                <span *ngFor="let act of menu.act">
                  <span *ngIf="act.name === col"
                    ><img src="assets/check.svg" alt="" class="w-full h-5"
                  /></span>
                </span>
              </td>
            </tr>
          </ng-container>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class MenumanagementComponent {
  data = data;

  columns: string[] = [];

  ngOnInit() {
    this.getColumns();
  }

  getColumns() {
    this.data.forEach((e) => {
      e.menu.forEach((menu) => {
        menu.act.forEach((act) => {
          this.columns.push(act.name.toString());
        });
      });
    });

    this.columns = Array.from(new Set(this.columns));

    console.log(this.columns);
  }

  showSearchbar = true;
  toggleShowSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }
}
