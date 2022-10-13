import { Order } from '../order/Order';

export interface Client {
    id: number;
    cpf: String;
    firstName: String;
    lastName: String;
    order: Array<Order>
}