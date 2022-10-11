import { Furniture } from '../furniture/Furniture';
import { Image } from '../image/Image';
export interface Enviroment {
    id: number;
    name: String;
    image: Image;
    furniture: Array<Furniture>
}