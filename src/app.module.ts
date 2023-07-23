import { Global, Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { MailModule } from './modules/mail/mail.module';
import { OtpModule } from './modules/otp/otp.module';
import { UserModule } from './modules/user/user.module';
import { ApiModules } from './modules/api/api.module';

export const modules = [
  ConfigurationModule,
  UserModule,
  AccountModule,
  MailModule,
  OtpModule,
  ApiModules,
];
@Global()
@Module({
  imports: [...modules],
  controllers: [],
  providers: [],
  exports: [ConfigurationModule],
})
export class AppModule {}
