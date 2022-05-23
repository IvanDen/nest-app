import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: "mail@mail.com", description: "mail"})
    readonly email: string;
    
    @ApiProperty({example: "pazzv0rd", description: "password"})
    readonly password: string;
}