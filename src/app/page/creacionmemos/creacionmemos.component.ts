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
import {DocumentCom} from "../../models/DocumentCom";
import {Communications} from "../../models/Communications";
import {SequentialCreationDto} from "../../models/SequentialCreationDto";
import {Employee_select} from "../../models/employee_select";
import {Department} from "../../models/department";
import {ComunicationsService} from "../../services/comunications.service";

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
export class CreacionmemosComponent implements OnInit {

    constructor(
        private userService: UserService,
        private companyInfoService: companyInfoService,
        private comunicationsService: ComunicationsService
    ) {
    }

    selectedCC: Employee_select[] = [];
    users: any[] = [];
    selectedDe: Employee_select = new Employee_select();
    selectedPara: Employee_select = new Employee_select();
    departamento: any[] = [];
    selectedDepartamento: Department = new Department();
    documentCom: DocumentCom = new DocumentCom();
    sequentialCreationDto: SequentialCreationDto = new SequentialCreationDto();
    secuencialmemo: string = '';

    fecha: Date | undefined;
    asunto!: string;
    visible: boolean = false;

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

    create() {
        this.visible = true;
        this.documentCom.main_sequential = 0;
        this.documentCom.secondary_sequential = 0;
        this.documentCom.sequential = '';
        this.documentCom.type = '';
        this.documentCom.sequential_date = new Date();
        this.documentCom.department = '';
        this.documentCom.document = new Document();

        this.sequentialCreationDto.department = this.selectedDepartamento.acronym;
        this.sequentialCreationDto.type = 'M';
        this.sequentialCreationDto.sequential_date = this.fecha ? this.fecha.toISOString() : '';
        this.sequentialCreationDto.fromEmployeeId = this.selectedDe.id;
        this.sequentialCreationDto.toEmployeeId = this.selectedPara.id;
        this.sequentialCreationDto.ccEmployeeIds = this.selectedCC.map(cc => cc.id);
        this.sequentialCreationDto.subject = this.asunto;

        this.comunicationsService.saveComunications(this.sequentialCreationDto).subscribe(response => {
            console.log('Respuesta del servidor:', response);
            this.secuencialmemo = response.documentcom.sequential;
            this.visible = true;
        }, error => {
            console.error('Error al crear el secuencial:', error);
        });
    }

    copyToClipboard() {
    if (navigator.clipboard) {
        // Usar la API del portapapeles si está disponible
        navigator.clipboard.writeText(this.secuencialmemo).then(() => {
        }).catch(err => {
            console.error('Error al copiar al portapapeles', err);
        });
    } else {
        // Usar un método alternativo si la API del portapapeles no está disponible
        const textarea = document.createElement('textarea');
        textarea.value = this.secuencialmemo;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Error al copiar al portapapeles', err);
        }
        document.body.removeChild(textarea);
    }
}


}
