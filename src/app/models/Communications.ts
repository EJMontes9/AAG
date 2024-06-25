import {Employees} from "./Employees";
import {DocumentCom} from "./DocumentCom";

export class Communications {
    id: number = 0;
    from: Employees = new Employees();
    to: Employees = new Employees();
    cc: Employees[] = [];
    subject: string = '';
    documentcom: DocumentCom = new DocumentCom();
}