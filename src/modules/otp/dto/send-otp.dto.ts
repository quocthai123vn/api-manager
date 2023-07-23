import { IsNotEmpty } from 'class-validator';

export class SendOtpDto {
  @IsNotEmpty()
  contact: string;

}
