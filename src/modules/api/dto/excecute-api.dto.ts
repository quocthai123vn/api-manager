import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { IParam } from '../entities/api.entity';
import { Method } from 'src/shares/enums/method.enum';

export class ExecuteApi {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  @IsEnum(Method)
  method: Method;

  @IsOptional()
  params: IParam[];
}
