import { Address } from "../address/Address";
import { Contact } from "../contact/Contact";
import { Item } from "../item/Item";
import { LivingArea } from "../livingArea/LivingArea";

export interface Woodwork {
    companyName: string;
    cnpj: string;
    description?: string;
    items?: Array<Item>;
    livingAreas?: Array<LivingArea>;
    address: Address;
    contact: Contact;
}