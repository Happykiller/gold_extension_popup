import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';
import { AccountUsecaseModel } from '@usecase/account/model/account.usecase.model';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';

export class GetAccountsUsecase {

  constructor(
    private inversify:Inversify
  ){}

  async execute(): Promise<AccountUsecaseModel[]>  {
    const response:BackgroundServiceModel = await this.inversify.backgroundService.send({
      name: ORDERS.GET_ACCOUNTS
    });

    if(response.message !== CODES.SUCCESS) {
      throw new Error(response.message);
    }

    return response.data;
  }
}