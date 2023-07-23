import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { DeleteApiDto } from './dto/delete-api.dto';
import { ExecuteApi } from './dto/excecute-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/create')
  createApi(createApiDto: CreateApiDto) {
    return this.apiService.createApi(createApiDto);
  }

  @Put('/update')
  updateApi(updateApiDto: UpdateApiDto) {
    return this.apiService.updateApi(updateApiDto);
  }

  @Delete('/delete')
  deleteApi(deleteApiDto: DeleteApiDto) {
    return this.apiService.deleteApi(deleteApiDto);
  }

  @Get('/get')
  findApi() {
    return this.apiService.findApi();
  }

  @Post('/execute')
  executeApi(executeApi: ExecuteApi) {
    return this.apiService.executeApi(executeApi);
  }
}
