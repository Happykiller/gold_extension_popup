import { CODES } from '@src/common/codes';
import { ORDERS } from '@src/common/orders';
import BackgroundServiceFake from '@service/background/background.service.fake';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';

describe('BackgroundServiceFake', () => {
  const service: BackgroundServiceFake = new BackgroundServiceFake();

  describe('#execute', () => {

    it('should build', () => {
      // arrange
      // act
      // assert
      expect(service).toBeDefined();
    });

    it('should get response for order auth', async () => {
      // arrange
      // act
      const response:BackgroundServiceModel = await service.send({
        name: ORDERS.AUTH
      });
      // assert
      expect(response).toEqual({
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
      });
    });

  });
});