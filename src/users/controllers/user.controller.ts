import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { CreateUserDto } from '../dtos/create_user_dto';
import { UsersService } from '../service/users.service';

@Controller('user')
export class UserController {


        constructor( private userService: UsersService ) { }


        @Post('create')
        async createUser( @Body() createUserDTO : CreateUserDto, @Res() res : Response  ) {
                if( await this.userService.createUser(createUserDTO) == true  ){
                        return res.status(200).json({
                                "status" : true,
                                "data" : "User created"
                        });
                }else{
                        return res.status(200).json({
                                "status" : false,
                                "data" : "Unable to create user"
                        });
                }
             
        }

}
