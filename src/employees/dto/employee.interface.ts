import { Document } from 'mongoose';

export interface Employee extends Document {
    readonly name: string;
    readonly hired: Boolean;
    readonly role: string;
}

export class CreateEmployeeDto {
    readonly name: string;
    readonly hired: Boolean;
    readonly role: string;
    
}