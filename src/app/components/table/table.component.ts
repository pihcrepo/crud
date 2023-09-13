import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() itemsPerPage = 0;
  @Input() tablecss?: string;

  columns: string[] = [];
  currentPage: number = 1;

  ngOnInit() {
    if (this.data.length > 0) {
      this.columns = Object.keys(this.data[0]).slice(1);
    }
  }

  get visibleItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number[] {
    return Array.from(
      { length: Math.ceil(this.data.length / this.itemsPerPage) },
      (_, i) => i + 1,
    );
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages().length) {
      this.currentPage = pageNumber;
    }
  }

  sortOrder: { [key: string]: string } = {};
  rearrange(column: string) {
    if (!this.sortOrder[column]) this.sortOrder[column] = 'asc';
    else if (this.sortOrder[column] === 'asc') this.sortOrder[column] = 'desc';
    else if (this.sortOrder[column] === 'desc') this.sortOrder[column] = 'asc';

    const orderMultiplier = this.sortOrder[column] === 'asc' ? 1 : -1;

    this.data.sort((a, b) => {
      if (typeof a[column] === 'number')
        return (a[column] - b[column]) * orderMultiplier;
      return a[column].localeCompare(b[column]) * orderMultiplier;
    });
  }

  isNumber(number: any): boolean {
    return typeof number === 'number';
  }
}
