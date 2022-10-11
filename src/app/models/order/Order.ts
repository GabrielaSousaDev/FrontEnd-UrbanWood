import { Furniture } from '../furniture/Furniture';
import { Woodwork } from '../woodwork/Woodwork';
import { Client } from '../client/Client';
import { Status } from '../status/status';
import { Payment } from '../payment/payment';

export interface Order {
    id: number;
    price: any;
    status: Status;
    payment: Payment;
    startDate: Date;
    endDate: Date;
    client: Client;
    woodwork: Woodwork;
    furnitures: Array<Furniture>;

}