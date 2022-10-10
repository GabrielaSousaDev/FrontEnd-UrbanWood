import { Client } from "../client/Client";
import { Order } from "../order/Order";
import { Woodwork } from "../woodwork/Woodwork";

export interface Item {
    id: number;
    quantity: number;
    totalPrive: number;
    order: Order;
    client: Client;
    woodwork: Woodwork;
}