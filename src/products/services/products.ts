import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDTO } from "../dtos/product.dto";
import { UpdateProductDTO } from "../dtos/update_product.dto";
import { Product } from '../entities/product.entity'


@Injectable()
export class ProductService {

     constructor( @InjectRepository(Product) private productRepository: Repository<Product>  ) { } 

     async findAll() : Promise<Product[]> {
          return this.productRepository.find();
     }

     async createProduct(product: ProductDTO) : Promise<boolean> {
         try {
          const newProduct = this.productRepository.create(product);
          await this.productRepository.save(newProduct);
          return true;
         } catch (error) {
          console.log("There was a problem creating the product "+error.message);
          return false;
         }
     }

    async updateProduct(product: UpdateProductDTO) : Promise<boolean> {
          const productFounded: Product = await this.findOne(product.id);
          if( productFounded == null ){
                    return false;
          }
          this.productRepository.merge(productFounded, product);
          await this.productRepository.save(productFounded);
          return true;
     }

     async findOne(id: number) : Promise<Product> {
          const product =  await this.productRepository.findOne({
               where: { id: id },
          });
          if( product == null ){
               return null;
          }
          return product;
     }
}