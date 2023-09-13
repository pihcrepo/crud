import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="flex h-screen w-full bg-[url('assets/img/logindescbackground.jpg')]"
    >
      <div
        class="flex flex-col w-1/2 md:hidden relative text-white bg-cover p-10"
      >
        <span class="text-2xl absolute">@ COMPANY NAME</span>

        <div
          class="midform h-full flex flex-col justify-center items-center gap-10"
        >
          <span class="text-4xl">Nice to see you again</span>
          <span class="text-7xl">WELCOME BACK</span>
          <div class="w-1/5 h-1.5 bg-white rounded-md"></div>
          <p class="text-center px-72">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. laboriosam
            ipsa, facere amet pariatur, quis animi! Deleniti.
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center w-1/2 md:w-full">
        <div
          class="flex flex-col w-1/2 gap-10 border px-16 py-24 rounded-xl bg-white"
        >
          <span class="text-main text-3xl text-center">{{ title }}</span>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class TemplateComponent {
  @Input() title = '';
}
