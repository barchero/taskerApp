import {Pagination} from '@domain/pagination/entities/Pagination';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {HttpClient} from '@angular/common/http';
import {ShortWorkOrdersRepository} from '@domain/workOrders/repositories/ShortWorkOrdersRepository';

export class ShortWorkOrdersRepositoryImpl implements ShortWorkOrdersRepository {

  constructor(private httpClient: HttpClient) {}

  async listWorkOrders(options: QueryList<ShortWorkOrder>): Promise<Pagination<ShortWorkOrder>> {
    return await this.httpClient.post<Pagination<ShortWorkOrder>>('/work-orders/list', options).toPromise();
  }

}
