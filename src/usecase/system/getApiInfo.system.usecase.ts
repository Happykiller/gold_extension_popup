import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';
import { ApiSystemInfoUsecaseModel } from '@usecase/system/model/getApiInfo.system.usecase.model';

export default class GetApiSystemInfoUsecase {

  constructor(
    private inversify: Inversify,
  ) {}

  async execute(): Promise<{
    message: string;
    data?: ApiSystemInfoUsecaseModel;
    error?: string;
  }> {
    const response:BackgroundServiceModel = await this.inversify.backgroundService.send({
      name: ORDERS.GET_API_SYSTEM_INFO
    });

    if(response.message !== CODES.SUCCESS) {
      throw new Error(response.message);
    }

    return {
      message: CODES.SUCCESS,
      data: response.data
    }
  } catch (e: any) {
    if(e.message in CODES) {
      return {
        message: e.message,
        error: e.message
      }
    } else {
      return {
        message: CODES.FAIL,
        error: e.message
      }
    }
  }
}