import { Body, Controller, Get, Post } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { Auth } from './decorators';
import { ValidRoles } from './interfaces';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiCreatedResponse({ description: 'User account created' })
    @ApiBadRequestResponse({ description: 'Value duplicated' })
    create(@Body() createUserDto: CreateUserDto) {
        return this.authService.create(createUserDto);
    }

    @Post('login')
    @ApiResponse({ status: 201, description: 'Login success' })
    @ApiBadRequestResponse({
        description: 'Credentials are not valid email/password',
    })
    loginUser(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

    //* Private route example
    @Get('private-route')
    @Auth(ValidRoles.admin)
    privateRoute() {
        return {
            ok: true,
            message: 'welcome to private route',
        };
    }
}
