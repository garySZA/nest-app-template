import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return updateUserDto;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
