import {WorkOrdersRepository} from '@domain/workOrders/repositories/WorkOrdersRepository';
import {GetWorkOrdersList} from '@domain/workOrders/use-cases/getWorkOrdersList';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {Pagination} from '@domain/pagination/entities/Pagination';

export class GetWorkOrdersListImpl implements GetWorkOrdersList {
    constructor(
        private workOrdersRepository: WorkOrdersRepository
    ) { }

    async execute(options: QueryList): Promise<Pagination<ShortWorkOrder>> {
        return await this.workOrdersRepository.listWorkOrders(options);
    }

}
