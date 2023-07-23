import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Api } from './entities/api.entity';
import { Repository } from 'typeorm';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { toObjectId } from 'src/shares/helpers/mongoose.helper';
import { DeleteApiDto } from './dto/delete-api.dto';
import { ExecuteApi } from './dto/excecute-api.dto';
import { Method } from 'src/shares/enums/method.enum';
import axios from 'axios';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Api) private readonly apiRepository: Repository<Api>,
  ) {}

  async createApi(createApiDto: CreateApiDto) {
    const api = this.apiRepository.create(createApiDto);
    return await this.apiRepository.save(api);
  }

  async updateApi(updateApiDto: UpdateApiDto) {
    const { apiId } = updateApiDto;
    delete updateApiDto.apiId;
    const api = await this.apiRepository.update(
      { _id: toObjectId(apiId) },
      updateApiDto,
    );
    return api;
  }

  async deleteApi(deleteApiDto: DeleteApiDto) {
    const { apiId } = deleteApiDto;
    const api = await this.apiRepository.delete({ _id: toObjectId(apiId) });
    return api;
  }

  async findApi() {
    const api = await this.apiRepository.find();
    return api;
  }

  async executeApi(executeApi: ExecuteApi) {
    const { url, method, params } = executeApi;
    let result: any;
    switch (method) {
      case Method.get:
        result = await axios.get(url, { data: params });
        break;
      case Method.post:
        result = await axios.post(url, { data: params });
        break;
      case Method.put:
        result = await axios.put(url, { data: params });
        break;
      case Method.delete:
        result = await axios.delete(url, { data: params });
        break;
      default:
        break;
    }
    return result;
  }
}
