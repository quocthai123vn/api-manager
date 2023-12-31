import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mongodb',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  logging: ['query', 'error'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
