import { Woodwork } from "../woodwork/Woodwork";


export interface Contact {
    id: number;
    email: string;
    phoneNumber: string;
    socialNetwork?: string;
    woodwork: Woodwork;
   
}