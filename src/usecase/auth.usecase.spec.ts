import {describe, expect, test} from '@jest/globals';
import { mock, MockProxy } from 'jest-mock-extended';

import AuthUsecase from '@usecase/auth.usecase';
import { Inversify } from '@src/common/inversify';
import { AuthUsecaseModel } from '@usecase/model/auth.usecase.model';
import BackgroundService from '@service/background/background.service';

describe('AuthUsecase', () => {
  const mockInversify: MockProxy<Inversify> = mock<Inversify>();
  const mockBackgroundService: MockProxy<BackgroundService> = mock<BackgroundService>();

  mockInversify.backgroundService = mockBackgroundService;

  const usecase: AuthUsecase = new AuthUsecase(mockInversify);

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
        sessionId: '45645456'
      });
      // act
      const response:AuthUsecaseModel = await usecase.execute({
        login: 'test',
        password: 'test'
      });
      // assert
      expect(response).toEqual({
        sessionId: '45645456'
      });
    });

  });
});