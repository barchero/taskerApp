import {WorkOrder} from '../entities/WorkOrder';
import {Pagination} from '@domain/pagination/entities/Pagination';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';

export abstract class WorkOrdersRepository {
    abstract async listWorkOrders(options: QueryList): Promise<Pagination<ShortWorkOrder>>;

    abstract async getWorkOrderById(id: string): Promise<WorkOrder>;
}
