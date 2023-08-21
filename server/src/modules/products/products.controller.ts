import { Controller, Get, Param } from '@nestjs/common';

import products, { Product } from '../../products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    console.log('id', id.toString());
    var pp = products.find((product) => product.id === parseInt(id));
    console.log('return product', id, pp);
    return pp;
  }
}
