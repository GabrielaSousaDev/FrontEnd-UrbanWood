import { Enviroment } from "../environment/environment";
import { Order } from "../order/Order";

export interface Woodwork {
    id: number;
    companyName: String;
    description: String;
    enviroment: Array<Enviroment>;
    order: Array<Order>;
} 



