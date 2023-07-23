import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('/send')
  async sendOtp(@Body() sendOtpDto: SendOtpDto) {
    await this.otpService.sendOtp(sendOtpDto);
  }
  
  @Post('/verify')
  async verifyOTP(@Body() verifyOtpDto: VerifyOtpDto) {
    await this.otpService.verifyOtp(verifyOtpDto);
  }
}
