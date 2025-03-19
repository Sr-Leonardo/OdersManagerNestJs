import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from 'src/oders/application/dtos/create-order.dto';
import { OrdersService } from 'src/oders/application/services/order.service';

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {}

    @Post('create')
    create(@Body() order: OrderDto){
        return this.ordersService.createOrder(order);
    }
    
}
