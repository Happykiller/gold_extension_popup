import BackgroundService from '@src/service/background/background.service';
import { BackgroundServiceDto } from '@src/service/background/dto/background.service.dto';
import { BackgroundServiceModel } from '@src/service/background/model/background.service.model';

export default class BackgroundServiceReal extends BackgroundService {

  constructor(
    private chrome: any,
  ) {
    super();
  }

  private chromeRuntimeSendMessage = (dto: BackgroundServiceDto): Promise<BackgroundServiceModel> => {
    return new Promise ((resolve, reject) => {
      try {
        this.chrome.runtime.sendMessage({
          data: {
            order: dto
          }
        }, resolve);
      } catch (e) {
        reject(e);
      }
    })
  }
  
  async send(dto: BackgroundServiceDto): Promise<BackgroundServiceModel> {
    return this.chromeRuntimeSendMessage(dto);
  }
}