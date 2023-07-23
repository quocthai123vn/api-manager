import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class SetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsNotEmpty()
  @Length(6, 6)
  @IsNumberString()
  otp: string;
}
