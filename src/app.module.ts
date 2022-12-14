import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsModule } from './moduls/tuits/tuits.module';

@Module({
  imports: [TuitsModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tuilder_api',
      autoLoadEntities: true,
      synchronize: true,
  }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
