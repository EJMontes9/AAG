import {Component, OnInit} from '@angular/core';
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
import {DialogModule} from "primeng/dialog";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";

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
        InputTextareaModule,
        DialogModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule
    ],
  templateUrl: './creacionmemos.component.html',
  styleUrl: './creacionmemos.component.css'
})
export class CreacionmemosComponent implements OnInit{

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
            //console.log(this.users)
        });
        this.companyInfoService.getDepartamentos().subscribe(departments => {
            this.departamento = departments;
            //console.log(this.departamento)
        });
    }

    visible: boolean = true;

    showDialog() {

    }

    create() {
        this.visible = true;
        //console.log('de->',this.selectedDe  , 'para->', this.selectedPara);
        //console.log('cc->',this.selectedCC);
    }

}
