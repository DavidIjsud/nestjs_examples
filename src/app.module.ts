import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import  config  from './config';
import * as Joi from 'joi';

@Module({
  imports: [
     ConfigModule.forRoot({
        envFilePath:  process.env.NODE_ENV || '.env' ,
        isGlobal: true,
        load: [config],
        validationSchema: Joi.object({
          POSTGRES_HOST: Joi.string().required(),
          POSTGRES_PORT: Joi.number().required(),
          POSTGRES_USER: Joi.string().required(),
          POSTGRES_PASSWORD: Joi.string().required(),
          POSTGRES_DB: Joi.string().required(),
        }),
     }),
     DatabaseModule,
     ProductsModule,
     UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
