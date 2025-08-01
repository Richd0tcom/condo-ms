import { Company as CompanyEntity } from "@prisma/client";

export class Company implements CompanyEntity {
    id: string;
    name: string;
    email: string;
    domain: string;
}
    
