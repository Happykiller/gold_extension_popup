import { BackgroundServiceDto } from '@service/background/dto/background.service.dto';
import { BackgroundServiceModel } from '@service/background/model/background.service.model';

export default abstract class BackgroundService {
  abstract send(dto: BackgroundServiceDto): Promise<BackgroundServiceModel>;
}