import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {Pagination} from '@domain/pagination/entities/Pagination';
import {ShortWorkOrdersRepositoryImpl} from '@infrastructure/httpClient/workOrders/ShortWorkOrdersRepositoryImpl';
import {GetShortWorkOrdersList} from '@domain/workOrders/use-cases/getShortWorkOrdersList';
import {GetShortWorkOrdersListImpl} from '@application/workOrders/use-cases/getShortWorkOrdersList';

@Injectable({
  providedIn: 'root'
})
export class WorkOrdersListService {

  getShortWorkOrdersList: GetShortWorkOrdersList;

  constructor(private http: HttpClient) {
    this.getShortWorkOrdersList = new GetShortWorkOrdersListImpl(new ShortWorkOrdersRepositoryImpl(http));
  }

  list(options: QueryList<ShortWorkOrder>): Observable<Pagination<ShortWorkOrder>> {
    return from(this.getShortWorkOrdersList.execute(options));
  }
}
