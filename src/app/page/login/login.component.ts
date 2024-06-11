import { Component } from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string | undefined;
  password!: string;
}
