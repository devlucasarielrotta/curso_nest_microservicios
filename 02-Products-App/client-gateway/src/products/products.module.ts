import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products.controller';
import { envs, NATS_SERVERS } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports:[
    ClientsModule.register([
      {
        name: NATS_SERVERS, 
        transport:Transport.NATS,
        options:{
          servers:envs.natsServers
        }
      }
    ])
  ]
})
export class ProductsModule {}
