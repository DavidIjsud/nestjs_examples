import { Module } from '@nestjs/common';
import { ProductService } from './services/products';
import { ProductssController } from './productss/productss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([ Product ]) ],
  providers: [
     ProductService,
  ],
  controllers: [ProductssController]
})
export class ProductsModule {}
