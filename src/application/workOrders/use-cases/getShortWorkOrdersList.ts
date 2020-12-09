import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';
import {QueryList} from '@domain/workOrders/entities/QueryList';
import {Pagination} from '@domain/pagination/entities/Pagination';
import {ShortWorkOrdersRepository} from '@domain/workOrders/repositories/ShortWorkOrdersRepository';
import {GetShortWorkOrdersList} from '@domain/workOrders/use-cases/getShortWorkOrdersList';

export class GetShortWorkOrdersListImpl implements GetShortWorkOrdersList {
    constructor(
        private shortWorkOrdersRepository: ShortWorkOrdersRepository
    ) { }

    async execute(options: QueryList<ShortWorkOrder>): Promise<Pagination<ShortWorkOrder>> {
        return await this.shortWorkOrdersRepository.listWorkOrders(options);
    }

}
