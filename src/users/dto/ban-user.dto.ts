import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: 55, description: "User Id"})
    readonly userId: number;
    @ApiProperty({example: "Spammer", description: "Ban reason"})
    readonly banReason: string;
}