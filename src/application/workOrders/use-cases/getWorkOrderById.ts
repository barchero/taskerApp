import {GetWorkOrderById} from '@domain/workOrders/use-cases/getWorkOrderById';
import {WorkOrder} from '@domain/workOrders/entities/WorkOrder';
import {WorkOrdersRepository} from '@domain/workOrders/repositories/WorkOrdersRepository';

export class GetWorkOrderByIdImpl implements GetWorkOrderById {

    constructor(
        private workOrdersRepository: WorkOrdersRepository
    ) { }

    async execute(id: string): Promise<WorkOrder> {
        return await this.workOrdersRepository.getWorkOrderById(id);
    }
}
