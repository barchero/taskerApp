import {Pagination} from '@domain/pagination/entities/Pagination';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';

export abstract class ShortWorkOrdersRepository {
    abstract async listWorkOrders(options: QueryList<ShortWorkOrder>): Promise<Pagination<ShortWorkOrder>>;
}
