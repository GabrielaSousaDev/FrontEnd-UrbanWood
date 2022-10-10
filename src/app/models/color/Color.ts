import { Furniture } from "../furniture/Furniture";

export interface Color {
    id: number;
    nameColor: string;
    brand: string;
    furniture: Furniture;
}