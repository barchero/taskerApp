import {Component, OnInit} from '@angular/core';
import {WorkOrdersListService} from '@ui/app/admin/modules/work-orders/services/work-orders-list.service';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {Pagination} from '@domain/pagination/entities/Pagination';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  workOrders: Pagination<ShortWorkOrder>;
  sort: {
    sortBy: keyof ShortWorkOrder | string
    sortDesc: boolean
  };

  constructor(private workOrdersListService: WorkOrdersListService) {
    this.sort = {
      sortBy: 'id',
      sortDesc: true
    };
  }

  loadWorkOrders() {
    const subscription = this.workOrdersListService.list({
      orderBy: {
        [this.sort.sortBy]: this.sort.sortDesc ? 'DESC' : 'ASC'
      },
      pagination: {
        page: this.workOrders?.meta.currentPage | 1,
        limit: this.workOrders?.meta.itemsPerPage | 10
      }
    })
      .subscribe((res) => {
        this.workOrders = res;
        subscription.unsubscribe();
      }, () => {
        subscription.unsubscribe();
      });
  }

  update() {
    this.workOrders.meta.currentPage = 1;
    this.loadWorkOrders();
  }

  pageChanged() {
    this.loadWorkOrders();
  }

  ngOnInit(): void {
    this.loadWorkOrders();
  }

}
