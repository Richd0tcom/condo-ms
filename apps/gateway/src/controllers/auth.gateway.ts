import { KAFKA_CLIENTS } from "@app/common/kafka/kafka.constants";
import { CreateCompanyInput } from "@app/common/types";
import { ServiceResponse } from "@app/common/types/global";
import { Controller, Inject, Post } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { Company } from "@prisma/client";
import { lastValueFrom } from "rxjs";


@Controller('auth')
export class AuthGateway {

    constructor(
        @Inject(KAFKA_CLIENTS.AUTH_SERVICE)
        private readonly authClient: ClientKafka
    ) {}

    @Post()
    async registerCompany(payload: CreateCompanyInput) {
        return await lastValueFrom<ServiceResponse<Company>>(this.authClient.send('auth.register', payload).pipe());
    }
}