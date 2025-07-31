import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGateway } from './controllers/auth.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [process.env.KAFKA_BROKER!],
          },
          consumer: {
            groupId: 'api-gateway-auth-group',
          },
        },
      },
    ]),
  ],
  controllers: [AuthGateway],
  providers: [AppService],
})
export class AppModule {}
