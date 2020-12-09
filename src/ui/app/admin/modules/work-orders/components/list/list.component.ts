import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() workOrders: ShortWorkOrder[];
  @Input() sort: {
    sortBy: keyof ShortWorkOrder | string,
    sortDesc: boolean;
  };
  @Output() update = new EventEmitter<void>();

  constructor() { }

  setSort(sortField: keyof ShortWorkOrder | string) {
    if (this.sort.sortBy === sortField) {
      this.sort = Object.assign(this.sort, {sortDesc: !this.sort.sortDesc});
    } else {
      this.sort = Object.assign(this.sort, {
        sortDesc: true,
        sortBy: sortField
      });
    }
    this.update.emit();
  }

  ngOnInit(): void {
  }

}
