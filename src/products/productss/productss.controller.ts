import { Controller } from '@nestjs/common';
import { ProductService } from '../services/products';

@Controller('productss')
export class ProductssController {
        constructor( private productService: ProductService ) { }

        // get all products
        getAllProducts() {
            
        }
}
