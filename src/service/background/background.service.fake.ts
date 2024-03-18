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
            id: '1',
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
    } else if (dto.name === ORDERS.GET_API_SYSTEM_INFO) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: {
            version: '0.42.0'
          }
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.FAIL
        };
      }
    } else if (dto.name === ORDERS.GET_SESSION_INFO) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiZmFybyIsImlkIjoiNjVkODliOWVkY2Q4Y2JiYTlhN2NlNjUxIiwiaWF0IjoxNzA4NzYzNTgxLCJleHAiOjE3MDg3OTIzODF9.o4cQ-j1FEX0RgTYRm5R2ivt2770An_b2XHsYgmcgjdA",
            "id": "65d89b9edcd8cbba9a7ce651",
            "code": "faro",
            "name_first": "fabrice",
            "name_last": "rosito",
            "description": "description",
            "mail": "fabrice.rosito@gmail.com"
          }
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.FAIL
        };
      }
    } else if (dto.name === ORDERS.GET_OPE_CATEGORIES) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: [
            {
                id: 1,
                label: 'operation.category-other'
            }
          ]
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.FAIL
        };
      }
    } else if (dto.name === ORDERS.GET_OPE_THIRDS) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: [
            {
                id: 1,
                label: 'operation.third-otherCredit'
            }
          ]
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.FAIL
        };
      }
    } else if (dto.name === ORDERS.GET_ACCOUNTS) {
      /* istanbul ignore next */
      if (true) {
        response = {
          message: CODES.SUCCESS,
          data: [
            {
              id: 1,
              type_id: 1,
              parent_account_id: null,
              label: 'Mes comptes',
              description: null,
              balance_reconcilied: 0,
              balance_not_reconcilied: 0,
              creator_id: 1,
              creation_date: '1530129754000',
              modificator_id: null,
              modification_date: '1706459811000'
            }
          ]
        };
      } else {
        /* istanbul ignore next */
        response = {
          message: CODES.FAIL
        };
      }
    } else {
      throw new Error('Method not implemented.');
    }
    
    return Promise.resolve(response);
  }
}