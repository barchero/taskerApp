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

  constructor(private workOrdersListService: WorkOrdersListService) { }

  pageChanged() {
    const subscription = this.workOrdersListService.list({
      pagination: {
        page: this.workOrders.meta.currentPage,
        limit: this.workOrders.meta.itemsPerPage
      }
    })
      .subscribe((res) => {
        this.workOrders = res;
        subscription.unsubscribe();
      }, () => {
        subscription.unsubscribe();
      });
  }

  ngOnInit(): void {
    const subscription = this.workOrdersListService.list({
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

}
