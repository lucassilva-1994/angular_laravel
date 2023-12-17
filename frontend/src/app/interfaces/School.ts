export interface School {
    id:string;
    order:number;
    name:string;
    cnpj:string;
    email:string;
    phone:string;
    address: string;
    created_at: Date
    employees:[],
    students:[]
}