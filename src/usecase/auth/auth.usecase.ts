import { ORDERS } from '@src/common/orders';
import { Inversify } from '@src/common/inversify';
import { AuthUsecaseDto } from '@usecase/auth/dto/auth.usecase.dto';
import { AuthUsecaseModel } from '@usecase/auth/model/auth.usecase.model';

export default class AuthUsecase {

  constructor(
    private inversify: Inversify,
  ) {}

  async execute(dto: AuthUsecaseDto): Promise<AuthUsecaseModel> {
    const response = await this.inversify.backgroundService.send({
      name: ORDERS.AUTH,
      data: dto
    });

    return response as AuthUsecaseModel;
  }
}