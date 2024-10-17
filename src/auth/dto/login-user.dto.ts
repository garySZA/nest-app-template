import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    Matches,
} from 'class-validator';

export class LoginUserDto {
    @ApiProperty({
        description: 'The user email',
        example: 'john.doe@example.com',
        required: true,
        type: 'string',
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'The user password',
        example: 'P@ssw0rd123',
        required: true,
        type: 'string',
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message:
            'The password must have a Uppercase, lowercase letter and a number',
    })
    password: string;
}
