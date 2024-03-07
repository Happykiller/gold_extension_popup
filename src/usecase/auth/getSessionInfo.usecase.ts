import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';

export class GetSessionInfoUsecase {

  SessionInfo:any;

  constructor(
    private inversify:Inversify
  ){}

  async execute(): Promise<{
    message: string;
    data?: {
      id: string;
      code: string;
      access_token: string;
      name_first: string;
      name_last: string;
      description: string;
      mail: string;
    };
    error?: string;
  }>  {
    try {
      const response:any = await this.inversify.backgroundService.send({
        name: ORDERS.GET_SESSION_INFO
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
}