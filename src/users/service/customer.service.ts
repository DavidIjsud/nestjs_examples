import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerService {

     constructor (
         @InjectRepository( CustomerEntity ) private customerRepository: Repository<CustomerEntity>
     ) { }


    async findOneCustomer( idCustomer : number  ) : Promise<CustomerEntity> {
          const customerFounded : CustomerEntity =  await this.customerRepository.findOne( {
            where: { id: idCustomer }
        } );

        return customerFounded;
    }     

}
