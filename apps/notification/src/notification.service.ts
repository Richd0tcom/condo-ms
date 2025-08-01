import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  //TODO: use proper type
  async sendEmail(data: any): Promise<void> {
    console.log(`Sending welcome email to ${data.email} (${data.name})`);
  }
}
