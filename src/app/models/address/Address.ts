import { User } from "../user/User";

export interface Address {
    id: number;
    streetName: String;
    number: any;
    neighborhood: String;
    complement: String;
    city: String;
    cep: String;
    user: User;
}
