import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'User email',
        example: 'john.doe@example.com',
        required: true,
        type: String,
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'User Password',
        example: 'Password22',
        minLength: 6,
        required: true,
        type: String,
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message:
            'The password must have a Uppercase, lowercase letter and a number',
    })
    password: string;

    @ApiProperty({
        description: 'User Full Name',
        example: 'John Doe',
        minLength: 4,
        required: true,
        type: String,
    })
    @IsString()
    @MinLength(4)
    fullName: string;
}
