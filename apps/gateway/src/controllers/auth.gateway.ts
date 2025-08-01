import { KAFKA_CLIENTS } from "@app/common/kafka/kafka.constants";
import { Controller, Inject, Post } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";


@Controller('auth')
export class AuthGateway {

    constructor(
        @Inject(KAFKA_CLIENTS.AUTH_SERVICE)
        private readonly authClient: ClientKafka
    ) {}

    @Post()
    async registerCompany(payload: any) {
        const response = await lastValueFrom(this.authClient.send('auth.register', payload));
        return response;
    }
}