import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KafkaClientModule } from '@app/common/kafka/kafka.module';
import { KAFKA_CLIENTS, KAFKA_GROUP_IDS } from '@app/common/kafka/kafka.constants';
import { PrismaService } from '@app/common/prisma.service';

@Module({
  imports: [
    KafkaClientModule.register(KAFKA_CLIENTS.NOTIFICATION_SERVICE, KAFKA_GROUP_IDS.NOTIFICATION_SERVICE_GROUP),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
