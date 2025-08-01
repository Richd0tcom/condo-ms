import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  //TODO: use proper constant
  @EventPattern('company.created')
  async handleCompanyCreatedEvent(data: any): Promise<void> {
    await this.notificationService.sendEmail(data);
  }
}
