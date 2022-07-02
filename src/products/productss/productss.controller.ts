import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ProductDTO } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/products';
import { Response } from 'express';
import { UpdateProductDTO } from '../dtos/update_product.dto';

@Controller('products')
export class ProductssController {
        constructor( private productService: ProductService ) { }

        // get all products
        @Get('all')
       async getAllProducts() : Promise<Product[]> {
            return await this.productService.findAll();
        }

       @Post('update')
        async updateProduct( @Body() product: UpdateProductDTO, @Res() res : Response ) {
               if( await this.productService.updateProduct(product) == true ){
                        return res.status(200).json({
                                "status" : true,
                                "data" : "Product updated"
                        });
               }else{
                        return res.status(200).json({
                                "status" : false,
                                "data" : "Unable to update product"
                        });
               } 
        } 

        // get one product
        @Get('one/:id')
       async getOneProduct( @Res() res : Response , @Param('id') id : number) {
                const product = await this.productService.findOne(id);
                   if( product != null ){
                        return res.status(200).json({
                                 "status" : true,
                                 "data" : product
                         });       
                   }else{
                        return res.status(200).json({
                                "status" : false,
                                "data" : null
                        });   
                   }
        }

        @Post('create')
        async createProduct( @Body() product: ProductDTO, @Res() res : Response ) {
                if(   await this.productService.createProduct(product) == true  ){
                        return res.status(200).json({
                                "status" : true,
                                "data" : "Product created"
                        });
                }else{
                        return res.status(200).json({
                                "status" : false,
                                "data" : "Unable to create product"
                        });
                }
        }
}
