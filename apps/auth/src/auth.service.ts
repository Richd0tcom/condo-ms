import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_CLIENTS } from '@app/common/kafka/kafka.constants';

@Injectable()
export class AuthService {

  constructor(
    @Inject(KAFKA_CLIENTS.NOTIFICATION_SERVICE)
  private readonly notifClient: ClientKafka
  ) {}

  register(input: any) {

    //TODO: save company in db and use proper types
    this.notifClient.emit('company.created', { name: 'Company Name' });
  }

}
