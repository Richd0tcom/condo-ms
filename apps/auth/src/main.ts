import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function bootstrap() {
  console.log("kafkaaaaaaaaaaAuthhhh",process.env.KAFKA_BROKER); 
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER!],
      },
      consumer: {
        groupId: 'auth-service-group',
        allowAutoTopicCreation: true,
      },
    },
  });
  await app.listen();
}
bootstrap();