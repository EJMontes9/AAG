export enum EmployeeType {
    // Agrega los valores del enum aquí basándote en el enum Java EmployeeType
    INTERNO, EXTERNO
}

export class Employees {
    id: number = 0;
    name: string = '';
    last_name: string = '';
    email: string = '';
    CI: string = '';
    type_employee: EmployeeType = EmployeeType.INTERNO;
    type_contract: string = '';
    username: string = '';
    date_of_admission: Date = new Date();
    created_at: Date = new Date();
    updated_at: Date = new Date();
    deleted_at: Date = new Date();
}