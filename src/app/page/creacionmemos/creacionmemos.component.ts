import { Component } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MenuComponent} from "../../component/menu/menu.component";
import {MultiSelectModule} from "primeng/multiselect";
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {companyInfoService} from "../../services/companyInfo.service";

@Component({
  selector: 'app-creacionmemos',
  standalone: true,
    imports: [
        MenuComponent,
        CardModule,
        FormsModule,
        DropdownModule,
        ButtonModule,
        MultiSelectModule,
        CalendarModule,
        InputTextareaModule
    ],
  templateUrl: './creacionmemos.component.html',
  styleUrl: './creacionmemos.component.css'
})
export class CreacionmemosComponent {

    constructor(private userService: UserService, private companyInfoService:companyInfoService ){
    }

    cc: any[]=[];
    selectedCC: string | undefined;
    users: any[] = [];
    selectedDe: string | undefined;
    selectedPara: string | undefined;
    departamento: any[] = [];
    selectedDepartamento: string | undefined;

    fecha: Date | undefined;
    asunto!: string;

    ngOnInit() {
        this.userService.getAllUser().subscribe(users => {
            this.users = users;
            console.log(this.users)
        });
        this.companyInfoService.getDepartamentos().subscribe(departments => {
            this.departamento = departments;
            console.log(this.departamento)
        });
    }

    create() {
        console.log('de->',this.selectedDe  , 'para->', this.selectedPara);
        console.log('cc->',this.selectedCC);
    }

}
