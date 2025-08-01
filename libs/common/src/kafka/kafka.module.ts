import { Module, DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

export class KafkaClientModule {
  static register(serviceName: string, groupId: string): DynamicModule {
    return ClientsModule.register([
      {
        name: serviceName,
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER!],
          },
          consumer: {
            groupId,
            allowAutoTopicCreation: true,
          },
        },
      },
    ]);
  }
}