import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class VerifyAdminDto {
  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsNotEmpty()
  @Length(6, 6)
  @IsNumberString()
  otp: string;
}
