import { Furniture } from "../furniture/Furniture";
import { Woodwork } from "../woodwork/Woodwork";

export interface LivingArea {
    id: number;
    nameLivingArea: string;
    woodwork: Woodwork;
    furnitures?: Array<Furniture>;

}