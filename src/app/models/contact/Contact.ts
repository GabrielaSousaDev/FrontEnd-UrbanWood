import { Client } from "./Client";

export interface Contact {
    id: number;
    email: string;
    phoneNumber: string;
    socialNetwork?: string;
    woodwork: Woodwork;
    client: Client;
}