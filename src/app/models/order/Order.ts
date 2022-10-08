import { Status } from "../contact/Status";
import { Furniture } from "../furniture/Furniture";
import { Item } from "../item/Item";
import { Payment } from "../payment/Payment";

export interface Order {
    id: number;
    priceOrder?: number;
    status: Status;
    payment: Payment;
    intialDate: Date;
    finalDate?: Date;
    item?: Item;
    furnitures: Array<Furniture>;

}