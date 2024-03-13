import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';
import { OperationCategoryUsecaseModel } from '@usecase/operation/model/operationCategory.usecase.model';

export default class GetOpeCategoriesUsecase {

  constructor(
    private inversify: Inversify,
  ) {}

  async execute(): Promise<OperationCategoryUsecaseModel[]> {
    const response:BackgroundServiceModel = await this.inversify.backgroundService.send({
      name: ORDERS.GET_OPE_CATEGORIES
    });

    if(response.message !== CODES.SUCCESS) {
      throw new Error(response.message);
    }

    return response.data;
  }
}