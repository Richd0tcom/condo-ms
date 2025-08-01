import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCompanyInput } from '@app/common/types';
import { ServiceResponse } from '@app/common/types/global';
import { Company } from '@app/common/entities';
import { KAFKA_TOPICS } from '@app/common/kafka/kafka.constants';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @MessagePattern(KAFKA_TOPICS.CREATE_COMPANY)
  async register(payload: CreateCompanyInput): Promise<ServiceResponse<Company>> {
    const company = await this.authService.register(payload);

    return {
      success: true,
      message: 'Company created successfully',
      data: company,
    };
  }
}
