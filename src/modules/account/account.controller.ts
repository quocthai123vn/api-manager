import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { InitAdminDto } from './dto/init-admin.dto';
import { VerifyAdminDto } from './dto/verify-admin.dto';
import { AuthGuard } from './account.guard';
import { SignInDto } from './dto/sign-in.dto';
import { SetPasswordDto } from './dto/set-password.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('admin/init')
  initAdminAccount(@Body() initAdminDto: InitAdminDto) {
    return this.accountService.initAdminAccount(initAdminDto);
  }

  @Post('admin/verify')
  verifyAdminAccount(@Body() verifyAdminDto: VerifyAdminDto) {
    return this.accountService.verifyAdminAccount(verifyAdminDto);
  }

  @UseGuards(AuthGuard)
  @SetMetadata('roles', ['admin'])
  @Post('create')
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return await this.accountService.createAccount(createAccountDto);
  }

  @Post('signIn')
  async signIn(signInDto: SignInDto) {
    return await this.accountService.signIn(signInDto);
  }

  @Post('password/forgot')
  async forgotPassword(forgotPasswordDto: InitAdminDto) {
    return await this.accountService.forgotPassword(forgotPasswordDto);
  }

  @Post('password/set')
  async resetPassword(setPasswordDto: SetPasswordDto) {
    return await this.accountService.setPassword(setPasswordDto);
  }

  @Get('email')
  async getAllEmail() {
    return await this.accountService.getAllUserEmails();
  }
}
