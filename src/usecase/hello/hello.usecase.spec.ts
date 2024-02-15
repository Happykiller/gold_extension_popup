import {describe, expect, test} from '@jest/globals';
import { mock, MockProxy } from 'jest-mock-extended';

import { Inversify } from '@src/common/inversify';
import HelloUsecase from '@usecase/hello/hello.usecase';
import BackgroundService from '@service/background/background.service';
import { HelloUsecaseModel } from '@usecase/hello/model/hello.usecase.model';

describe('HelloUsecase', () => {
  const mockInversify: MockProxy<Inversify> = mock<Inversify>();
  const mockBackgroundService: MockProxy<BackgroundService> = mock<BackgroundService>();

  mockInversify.backgroundService = mockBackgroundService;

  const usecase: HelloUsecase = new HelloUsecase(mockInversify);

  describe('#execute', () => {

    it('should build', () => {
      // arrange
      // act
      // assert
      expect(usecase).toBeDefined();
    });

    it('should get the session id', async () => {
      // arrange
      mockBackgroundService.send.mockResolvedValue({
        data: 'Hello !'
      });
      // act
      const response:HelloUsecaseModel = await usecase.execute({
        name: 'fab'
      });
      // assert
      expect(response).toEqual('Hello !');
    });

  });
});