import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyInput {

    @ApiProperty()
    name: string;
    
    @ApiProperty({
        example: 'rehmat.sayani@gmail.com',
        required: true
      })
    email: string;
    
    @ApiProperty({
        example: 'gmail.com',
        required: true
      })
    domain: string;
}