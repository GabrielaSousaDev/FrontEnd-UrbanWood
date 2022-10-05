import { Color } from "./Color";

export interface Furniture {
    id: number;
    nameFurniture: string;
    description?: string;
    furnitureSize: number;
    priceFurniture: number;
    colors?: Array<Color>;
    orders: Array<Order>
}