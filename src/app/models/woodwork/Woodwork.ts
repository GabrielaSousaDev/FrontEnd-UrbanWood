export interface Woodwork {
    companyName: string;
    cnpj: string;
    description?: string;
    items?: Array<Item>;
    livingAreas?: Array<LivingArea>;
    address: Address;
    contact: Contact;
}