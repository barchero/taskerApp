import {WorkOrdersRepository} from '@domain/workOrders/repositories/WorkOrdersRepository';
import {Pagination} from '@domain/pagination/entities/Pagination';
import {WorkOrder} from '@domain/workOrders/entities/WorkOrder';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {HttpClient} from '@angular/common/http';

export class WorkOrdersRepositoryImpl implements WorkOrdersRepository {

  constructor(private httpClient: HttpClient) {}

  async getWorkOrderById(id: string): Promise<WorkOrder> {
    return await this.httpClient.get<WorkOrder>(`work-orders/detail/${id}`).toPromise();
  }

  async listWorkOrders(options: QueryList): Promise<Pagination<ShortWorkOrder>> {
    return await this.httpClient.post<Pagination<ShortWorkOrder>>('work-orders/list', options).toPromise();
  }

}
