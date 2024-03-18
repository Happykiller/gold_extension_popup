import { describe, expect } from '@jest/globals';
import { mock, MockProxy } from 'jest-mock-extended';

import { CODES } from '@src/common/codes';
import { Inversify } from '@src/common/inversify';
import AuthUsecase from '@src/usecase/auth/auth.usecase';
import BackgroundService from '@service/background/background.service';
import { AuthUsecaseModel } from '@usecase/auth/model/auth.usecase.model';

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
      const mockResponse:AuthUsecaseModel = {
        message: CODES.SUCCESS,
        data: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiZmFybyIsImlkIjoxLCJpYXQiOjE3MDc5MjAzOTIsImV4cCI6MTcwNzk0OTE5Mn0.UoayTTvKw7wo38tjnvAC9Omxv_2YMH8U-NGoT0257s4',
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

      mockBackgroundService.send.mockResolvedValue(mockResponse);
      // act
      const response:AuthUsecaseModel = await usecase.execute({
        login: 'test',
        password: 'test'
      });
      // assert
      expect(response).toEqual(mockResponse);
    });

  });
});