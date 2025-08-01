import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_CLIENTS, KAFKA_TOPICS } from '@app/common/kafka/kafka.constants';
import { PrismaService } from '@app/common/prisma.service';
import { Company, Prisma } from '@prisma/client';
import { CreateCompanyInput } from '@app/common/types';

@Injectable()
export class AuthService {

  constructor(
    @Inject(KAFKA_CLIENTS.NOTIFICATION_SERVICE)
  private readonly notifClient: ClientKafka,
  private prisma: PrismaService
  ) {}

  async register(input: CreateCompanyInput): Promise<Company> {
    

    const companyExists = await this.prisma.company.findFirst({
      where: {
        email: input.email
      }
    })

    if (companyExists) {
      throw new BadRequestException('Company already exists');
    }

    const company = await this.prisma.company.create({
      data: {
        name: input.name,
        email: input.email,
        domain: input.domain,
      },
    });
    this.notifClient.emit(KAFKA_TOPICS.COMPANY_CREATED, company);

    return company;
  }

}
