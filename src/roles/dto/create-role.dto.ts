import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({ example: "ADMIN", description: "users role" })
    readonly value: string;

    @ApiProperty({ example: "role from admins right", description: "description ebout role" })
    readonly description: string;
}