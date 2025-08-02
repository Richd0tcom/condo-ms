import { Company } from "@app/common/entities";
import { HttpExceptionFilter } from "@app/common/filters/http-exception.filter";
import { KAFKA_CLIENTS, KAFKA_TOPICS } from "@app/common/kafka/kafka.constants";
import { CreateCompanyInput } from "@app/common/types";
import { ServiceResponse } from "@app/common/types/global";
import { Body, Controller, Inject, Post, UseFilters } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";


@UseFilters(HttpExceptionFilter)
@Controller('auth')
export class AuthGateway {

    constructor(
        @Inject(KAFKA_CLIENTS.AUTH_SERVICE)
        private readonly authClient: ClientKafka
    ) {}

    onModuleInit() {
        this.authClient.subscribeToResponseOf(KAFKA_TOPICS.CREATE_COMPANY);
    }

    @Post()
    async registerCompany(@Body() payload: CreateCompanyInput) {
        return await lastValueFrom<ServiceResponse<Company>>(this.authClient.send(KAFKA_TOPICS.CREATE_COMPANY, payload).pipe());
    }
}