import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from '../dtos/create_user_dto';
import { CustomerEntity } from '../entities/customer.entity';
import { UserEntity } from '../entities/user.entity';
import { CustomerService } from './customer.service';

@Injectable()
export class UsersService {

        constructor(
               @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
               private customerService : CustomerService  
        ) { }

    async getAllUsers() : Promise<UserEntity[]> {
        return await this.userRepository.find( {
            relations: ['customer']
        } );
    }
    
    async createUser( user: CreateUserDto  ) : Promise<boolean> {
        const newUser: UserEntity = this.userRepository.create( user );
        try {
            if( user.idCustomer  ){
                  const customerEntity : CustomerEntity = await this.customerService.findOneCustomer( user.idCustomer );
                  if( customerEntity ){
                    newUser.customer = customerEntity;
                  }
            }

               this.userRepository.save( newUser );
               return true;

        } catch (error) {
            console.log("There was a problem creating the user "+error.message);
            return false;
        }
    }

}
