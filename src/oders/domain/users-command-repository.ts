import { OrderDto } from "../application/dtos/create-order.dto";
import { Order } from "./order.entitity";

export abstract class UsersCommandRepository {
    abstract create(order: OrderDto): Promise<Order>;
    abstract inactivate(id: number): Promise<Order>;
  }