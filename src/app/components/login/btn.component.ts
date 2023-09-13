import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex justify-center items-center mx-auto bg-main w-32 h-12
       cursor-pointer rounded-lg text-white text-xl relative border-2 z-10
       before:absolute before:left-0 before:z-[-1] before:bg-white before:rounded-lg before:duration-150 before:w-0 before:h-full before:content-[''] hover:before:w-full hover:text-main
       "
    >
      {{ btnTitle }}
    </div>
  `,
  styles: [],
})
export class BtnComponent {
  @Input() btnTitle = '';
}
