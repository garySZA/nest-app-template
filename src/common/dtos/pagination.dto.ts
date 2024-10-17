import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
    @ApiProperty({
        description: 'Number of items to return per page.',
        default: 10,
        minimum: 1,
        required: false,
        type: Number,
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @ApiProperty({
        description: 'Page number.',
        default: 1,
        minimum: 1,
        required: false,
        type: Number,
    })
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}
