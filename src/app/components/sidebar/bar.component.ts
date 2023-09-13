import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="w-64 h-12 flex justify-between items-center px-3 rounded-xl hover:bg-background cursor-pointer duration-300 relative z-10 bg-white"
      (click)="e.subMenuList ? toggleShowmore() : ''"
    >
      <div class="flex items-center gap-3">
        <img src="assets/logo.svg" alt="" class="w-6 h-6" />
        {{ e.name }}
      </div>
      <div
        class="w-5 h-5 {{
          showmore ? 'rotate-180' : ''
        }} duration-300 hover:scale-125"
        *ngIf="e.subMenuList"
      >
        <img src="assets/showmore.svg" alt="" />
      </div>
    </div>
    <div
      class="{{
        showmore ? 'translate-y-0 h-full' : 'translate-y-[-100%] h-0'
      }} ml-3 overflow-hidden duration-300 z-0"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class BarComponent {
  @Input() e: any;

  showmore = false;
  toggleShowmore() {
    this.showmore = !this.showmore;
  }
}
