import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { banking } from '../models/banking';
import { TemplateComponent } from '../components/template.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, TemplateComponent],
  template: ` <app-template [data]="data" /> `,
})
export class BankingComponent {
  data = banking;
}
