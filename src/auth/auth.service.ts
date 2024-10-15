import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { v4 as uuid } from 'uuid';

import { CreateUserDto, LoginUserDto } from './dto';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}
    async create(createUserDto: CreateUserDto) {
        const id = uuid();

        return {
            ...createUserDto,
            token: this.getJwtToken({ id }),
        };
    }

    async login(loginUserDto: LoginUserDto) {
        const id = uuid();

        return {
            ...loginUserDto,
            token: this.getJwtToken({ id }),
        };
    }

    private getJwtToken(payload: JwtPayload) {
        const token = this.jwtService.sign(payload);

        return token;
    }
}
