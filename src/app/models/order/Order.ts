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