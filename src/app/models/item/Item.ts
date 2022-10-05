export interface Item {
    id: number;
    quantity: number;
    totalPrive: number;
    order: Order;
    client: Client;
    woodwork: Woodwork;
}