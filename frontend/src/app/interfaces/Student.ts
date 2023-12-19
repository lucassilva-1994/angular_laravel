import { School } from "./School";

export interface Student{
    id:string;
    order:number;
    name:string;
    email:string;
    cpf:string;
    phone:string;
    birth_date: Date;
    created_at: Date;
    school:School
}