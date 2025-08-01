import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGateway } from './controllers/auth.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config'
import { KafkaClientModule } from '@app/common/kafka/kafka.module';
import { KAFKA_CLIENTS } from '@app/common/kafka/kafka.constants';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    KafkaClientModule.register(KAFKA_CLIENTS.AUTH_SERVICE, 'api-gateway-auth-group')
  ],
  controllers: [AuthGateway],
  providers: [AppService],
})
export class AppModule {}
