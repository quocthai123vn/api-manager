import { IsNotEmpty } from 'class-validator';

export class DeleteApiDto {
  @IsNotEmpty()
  apiId: string;
}
