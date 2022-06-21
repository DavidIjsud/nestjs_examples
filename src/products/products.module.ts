import { Module } from '@nestjs/common';
import { ProductService } from './services/products';
import { ProductssController } from './productss/productss.controller';

@Module({
  providers: [
     ProductService,
  ],
  controllers: [ProductssController]
})
export class ProductsModule {}
