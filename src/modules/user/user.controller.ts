import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../account/account.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard)
  @Put('update')
  async createAccount(@Req() req: any, @Body() updateUserDto: UpdateUserDto) {
    const user = req.user;
    return await this.userService.updateUser(user.userId, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Req() req: any) {
    const user = req.user;
    return await this.userService.findUserByAccountId(user.userId);
  }
}
