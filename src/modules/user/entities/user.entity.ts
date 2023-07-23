import { ObjectId } from 'mongodb';
import { Account } from 'src/modules/account/entities/account.entity';
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
  accountId: ObjectId;

  @OneToOne(() => Account)
  account: Account;
}
