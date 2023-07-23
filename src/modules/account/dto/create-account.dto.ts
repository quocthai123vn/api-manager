import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { AccountRoleEnum } from 'src/shares/enums/role.enum';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(AccountRoleEnum)
  role: AccountRoleEnum;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
