import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config  from '../config';

@Global()
@Module({
    imports: [
         TypeOrmModule.forRootAsync({
              inject: [ config.KEY ],
              useFactory: (configuration:  ConfigType<typeof config > ) => {
                    const { host,port,username,password,database} = configuration.postgres;
                    return {
                        type: 'postgres',
                        host: host,
                        port: port,
                        username: username,
                        password: password,
                        database: database,
                        synchronize: false,
                        autoLoadEntities: true,
                };
              },
         }),
    ],
    exports: [ TypeOrmModule ]  
})
export class DatabaseModule {}
