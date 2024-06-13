import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../../component/menu/menu.component";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {UserService} from "../../services/user.service";
import {MultiSelectModule} from "primeng/multiselect";
import {companyInfoService} from "../../services/companyInfo.service";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-creacionoficios',
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
  templateUrl: './creacionoficios.component.html',
  styleUrl: './creacionoficios.component.css'
})
export class CreacionoficiosComponent {
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
