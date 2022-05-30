import { ApiProperty } from "@nestjs/swagger";
import {IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: "mail@mail.com", description: "mail"})
    @IsString({message: 'Must be string'})
    readonly email: string;
    
    @ApiProperty({example: "pazzv0rd", description: "password"})
    @IsString({message: 'Must be string'})
    @Length(4,16, {message: 'Must be string'})
    readonly password: string;
}