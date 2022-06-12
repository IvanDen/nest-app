import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: "ADMIN", description: "role value"})
    @IsString({message: "Must be string"})
    readonly value: string;
    @ApiProperty({example: 55, description: "userID"})
    @IsNumber({},{message: "Must be number"})
    readonly userId: number;
}