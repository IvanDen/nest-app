import {Body, Controller, Get, Post } from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() userDTO: CreateUserDto) {
        return this.userService.createUser(userDTO);
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

}
