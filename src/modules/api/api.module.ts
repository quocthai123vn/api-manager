import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { Api } from './entities/api.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Api])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModules {}
