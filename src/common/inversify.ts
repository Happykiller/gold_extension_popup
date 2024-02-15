import config from '@src/common/config';
import AuthUsecase from '@usecase/auth/auth.usecase';
import HelloUsecase from '@usecase/hello/hello.usecase';
import BackgroundService from '@service/background/background.service';
import BackgroundServiceFake from '@service/background/background.service.fake';
import BackgroundServiceReal from '@service/background/background.service.real';
import CreateOperationUsecase from '@usecase/operation/create.operation.usecase';

export class Inversify {
  authUsecase: AuthUsecase;
  helloUsecase: HelloUsecase;
  backgroundService: BackgroundService;
  createOperationUsecase: CreateOperationUsecase;

  constructor() {
    // Usecases
    this.authUsecase = new AuthUsecase(this);
    this.helloUsecase = new HelloUsecase(this);
    this.createOperationUsecase = new CreateOperationUsecase(this);

    // Services
    if (config.mode === 'prod') {
      this.backgroundService = new BackgroundServiceReal(chrome);
    } else {
      this.backgroundService = new BackgroundServiceFake();
    }

  }
}

const inversify = new Inversify();

export default inversify;