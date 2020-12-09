import {WorkOrdersRepository} from '@domain/workOrders/repositories/WorkOrdersRepository';
import {WorkOrder} from '@domain/workOrders/entities/WorkOrder';
import {HttpClient} from '@angular/common/http';

export class WorkOrdersRepositoryImpl implements WorkOrdersRepository {

  constructor(private httpClient: HttpClient) {}

  async getWorkOrderById(id: string): Promise<WorkOrder> {
    return await this.httpClient.get<WorkOrder>(`/work-orders/detail/${id}`).toPromise();
  }

}
