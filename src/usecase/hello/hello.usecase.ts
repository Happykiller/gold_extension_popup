import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';
import { HelloUsecaseDto } from '@src/usecase/hello/dto/hello.usecase.dto';
import { HelloUsecaseModel } from '@src/usecase/hello/model/hello.usecase.model';

export default class HelloUsecase {

  constructor(
    private inversify: Inversify,
  ) {}

  async execute(dto: HelloUsecaseDto): Promise<HelloUsecaseModel> {
    const response = await this.inversify.backgroundService.send({
      name: ORDERS.HELLO,
      data: dto
    });

    return response as HelloUsecaseModel;
  }
}