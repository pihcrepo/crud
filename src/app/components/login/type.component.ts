import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex gap-3 bg-gray h-10 px-3 items-center overflow-hidden"
    >
      <img src="assets/{{ src }}" alt="" class="w-5 h-full border0" />
      <ng-content />
    </div>
  `,
  styles: [],
})
export class TypeComponent {
  @Input() src = '';
}
