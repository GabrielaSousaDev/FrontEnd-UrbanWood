import { Color } from "../color/Color";
import { Order } from "../order/Order";

export interface Furniture {
    id: number;
    nameFurniture: string;
    description?: string;
    furnitureSize: number;
    priceFurniture: number;
    colors?: Array<Color>;
    orders: Array<Order>
}