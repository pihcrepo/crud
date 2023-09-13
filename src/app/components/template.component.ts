import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <div
      class="flex flex-col px-16 py-5 bg-[url('assets/img/logindescbackground.jpg')] h-full w-full  relative "
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

      <app-table
        [data]="data"
        [itemsPerPage]="showSearchbar ? 10 : 15"
        [tablecss]="showSearchbar ? 'h-[55vh]' : 'h-[72vh]'"
      />
    </div>
  `,
  styles: [],
})
export class TemplateComponent {
  @Input() data: any[] = [];

  showSearchbar = true;
  toggleShowSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }
}
