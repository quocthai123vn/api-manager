import { Type } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Method } from 'src/shares/enums/method.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IParam {
  key: 'string';
  type: Type;
}

@Entity('api')
export class Api extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: ObjectId;

  @Column()
  apiName: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column({ enum: Method })
  method: Method;

  @Column()
  params: IParam[];
}
