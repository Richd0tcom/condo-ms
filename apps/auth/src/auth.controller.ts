import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //TODO: use proper constant
  @MessagePattern('company.create')
  async register(payload: any) {
    return this.authService.register(payload);
  }
}
