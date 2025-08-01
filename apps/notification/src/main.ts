import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification.module';
import { KAFKA_GROUP_IDS } from '@app/common/kafka/kafka.constants';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function bootstrap() {
  console.log("kafkaaaaaaaaaa",process.env.KAFKA_BROKER);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(NotificationModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER!],
      },
      consumer: {
        groupId: KAFKA_GROUP_IDS.NOTIFICATION_SERVICE_GROUP,
      },
    },
  });
  await app.listen();
}
bootstrap();

