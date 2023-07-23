import { IsEmail, IsNotEmpty } from 'class-validator';

export class InitAdminDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
