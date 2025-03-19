import { Inject, Injectable } from "@nestjs/common";
import { OrderDto } from "../dtos/create-order.dto";
import { ClientKafkaProxy } from "@nestjs/microservices";

@Injectable()
export class OrdersService{

    constructor(@Inject('KAFKA-CLIENT') private kafkaClient: ClientKafkaProxy) {}

    async createOrder(order: OrderDto){
        this.kafkaClient.emit('order-created', order);
        return order;
    }
}