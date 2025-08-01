import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_CLIENTS } from '@app/common/kafka/kafka.constants';
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
    //TODO: save company in db and use proper types

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
    this.notifClient.emit('company.created', company);

    return company;
  }

}
