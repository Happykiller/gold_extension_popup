import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import BackgroundService from '@service/background/background.service';
import { BackgroundServiceDto } from '@service/background/dto/background.service.dto';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';

export default class BackgroundServiceFake extends BackgroundService {

  async send(dto: BackgroundServiceDto): Promise<BackgroundServiceModel> {
    let response = {};
    if (dto.name === ORDERS.AUTH) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: {
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiZmFybyIsImlkIjoxLCJpYXQiOjE3MDc4MzgxNDksImV4cCI6MTcwNzg2Njk0OX0.A30_VX15NjtydQk_9bD0en_PPQ6M7gykHYxSRXn8l-s',
            id: 1,
            code: 'faro',
            name_first: 'Fabrice',
            name_last: 'Rosito',
            description: 'Admin',
            mail: 'fabrice.rosito@gmail.com',
            creation: '1706429496000',
            modification: '1706429496000',
            language: 'fr'
          }
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.AUTH_FAIL_WRONG_CREDENTIAL
        };
      }
    } else if (dto.name === ORDERS.CREATE_OPERATION) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: {
            id: 1,
            account_id: 1,
            account_id_dest: null,
            amount: 60,
            date: "2024-01-31",
            status_id: 2,
            type_id: 2,
            third_id: 2,
            category_id: 8,
            description: "Voyage illidan vers bordeaux",
            creator_id: 1,
            creation_date: "1708016596016",
            modificator_id: null,
            modification_date: null
          }
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.CREATE_OPERATION_FAIL
        };
      }
    } else if (dto.name === ORDERS.HELLO) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: `hello: ${dto.data.name} from the background!`
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.HELLO_FAIL
        };
      }
    }
    
    return Promise.resolve(response);
  }
}