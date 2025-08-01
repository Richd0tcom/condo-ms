import { Company } from '@app/common/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendEmail(data: Company): Promise<void> {
    console.log(`Sending welcome email to ${data.email} (${data.name})`);
  }
}
