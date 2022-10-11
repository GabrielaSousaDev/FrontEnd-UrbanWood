import { Color } from "../color/Color";
import { Image } from "../image/Image";

export interface Furniture {
    id: number;
    name: String;
    price: any;
    description: String;
    furnitureSize: any;
    image: Image;
    color: Array<Color>;

}