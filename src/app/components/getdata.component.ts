import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-getdata',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [],
})
export class GetdataComponent {
  posts: any = [];
  errorMessage!: string;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getDatas().subscribe({
      next: (datas) => {
        this.posts = datas;
        console.log(datas);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
