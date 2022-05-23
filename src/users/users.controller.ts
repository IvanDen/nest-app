import {Body, Controller, Get, Post } from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDTO: CreateUserDto) {
        return this.userService.createUser(userDTO);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

}
