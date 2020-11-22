import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';

import {WorkOrdersRepository} from '@domain/workOrders/repositories/WorkOrdersRepository';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {Pagination} from '@domain/pagination/entities/Pagination';

import {WorkOrdersRepositoryImpl} from '@infrastructure/httpClient/workOrders/WorkOrdersRepositoryImpl';

@Injectable({
  providedIn: 'root'
})
export class WorkOrdersListService {

  workOrdersRepository: WorkOrdersRepository;

  constructor(private http: HttpClient) {
    this.workOrdersRepository = new WorkOrdersRepositoryImpl(http);
  }

  list(options: QueryList): Observable<Pagination<ShortWorkOrder>> {
    return from(this.workOrdersRepository.listWorkOrders(options));
  }
}
