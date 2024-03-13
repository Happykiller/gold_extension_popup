import config from '@src/common/config';
import AuthUsecase from '@usecase/auth/auth.usecase';
import HelloUsecase from '@usecase/hello/hello.usecase';
import LoggerService from '@service/logger/logger.service';
import LoggerServiceReal from '@service/logger/logger.service.real';
import BackgroundService from '@service/background/background.service';
import GetSessionInfoUsecase from '@usecase/auth/getSessionInfo.usecase';
import { GetAccountsUsecase } from '@usecase/account/getAccounts.usecase';
import GetOpeThirdsUsecase from '@usecase/operation/getOpeThirds.usecase';
import BackgroundServiceFake from '@service/background/background.service.fake';
import GetApiSystemInfoUsecase from '@usecase/system/getApiInfo.system.usecase';
import BackgroundServiceReal from '@service/background/background.service.real';
import CreateOperationUsecase from '@usecase/operation/create.operation.usecase';
import GetOpeCategoriesUsecase from '@usecase/operation/getOpeCategories.usecase';

export class Inversify {
  authUsecase: AuthUsecase;
  helloUsecase: HelloUsecase;
  loggerService: LoggerService;
  backgroundService: BackgroundService;
  getAccountsUsecase: GetAccountsUsecase;
  getOpeThirdsUsecase: GetOpeThirdsUsecase;
  getSessionInfoUsecase: GetSessionInfoUsecase;
  createOperationUsecase: CreateOperationUsecase;
  getOpeCategoriesUsecase: GetOpeCategoriesUsecase;
  getApiSystemInfoUsecase: GetApiSystemInfoUsecase;

  constructor() {
    // Usecases
    this.authUsecase = new AuthUsecase(this);
    this.helloUsecase = new HelloUsecase(this);
    this.getAccountsUsecase = new GetAccountsUsecase(this);
    this.getOpeThirdsUsecase = new GetOpeThirdsUsecase(this);
    this.getSessionInfoUsecase = new GetSessionInfoUsecase(this);
    this.createOperationUsecase = new CreateOperationUsecase(this);
    this.getOpeCategoriesUsecase = new GetOpeCategoriesUsecase(this);
    this.getApiSystemInfoUsecase = new GetApiSystemInfoUsecase(this);

    // Services
    this.loggerService = new LoggerServiceReal();
    if (config.mode === 'prod') {
      this.backgroundService = new BackgroundServiceReal(chrome);
    } else {
      this.backgroundService = new BackgroundServiceFake();
    }

  }
}

const inversify = new Inversify();

export default inversify;