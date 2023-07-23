import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Method } from 'src/shares/enums/method.enum';
import { IParam } from '../entities/api.entity';

export class UpdateApiDto {
  @IsNotEmpty()
  apiId: string;

  @IsOptional()
  apiName: string;

  @IsOptional()
  url: string;

  @IsOptional()
  @IsEnum(Method)
  method: Method;

  @IsOptional()
  params: IParam[];

  @IsOptional()
  description: string;
}
