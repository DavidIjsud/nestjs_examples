import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CustomerController } from './controllers/customer.controller';
import { UsersService } from './service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './service/customer.service';
import { CustomerEntity } from './entities/customer.entity';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([  CustomerEntity, UserEntity  ])  ],
  controllers: [UserController, CustomerController],
  providers: [UsersService, CustomerService]
})
export class UsersModule {}
