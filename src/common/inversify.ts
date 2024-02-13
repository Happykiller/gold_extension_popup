import AuthUsecase from '@usecase/auth.usecase';
import BackgroundService from '@src/service/background/background.service';
import BackgroundServiceFake from '@src/service/background/background.service.fake';
import BackgroundServiceReal from '@src/service/background/background.service.real';
import config from '@src/common/config';

export class Inversify {
  authUsecase: AuthUsecase;
  backgroundService: BackgroundService;

  constructor() {
    // Usecases
    this.authUsecase = new AuthUsecase(this);

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