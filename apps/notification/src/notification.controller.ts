import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KAFKA_TOPICS } from '@app/common/kafka/kafka.constants';
import { Company } from '@app/common/entities';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern(KAFKA_TOPICS.COMPANY_CREATED)
  async handleCompanyCreatedEvent(company: Company): Promise<void> {
    await this.notificationService.sendEmail(company);
  }
}
