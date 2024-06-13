import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {RippleModule} from "primeng/ripple";
import {MenuItem, MessageService} from "primeng/api";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {PanelMenuModule} from "primeng/panelmenu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
      MenuModule,
      BadgeModule,
      RippleModule,
      AvatarModule,
      CardModule,
      PanelMenuModule,
      ToastModule
  ],
  providers: [MessageService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  isMenuVisible: boolean = false;

  constructor(private messageService: MessageService, private router: Router) {}

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Comunicaciones',
        items: [
          {
            label: 'Creacion memos',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['/addmemos']);
            }
          },
          {
            label: 'Creacion oficios',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['/addoficios']);
            }
          },
          {
            label: 'Mis comunicaciones',
            icon: 'pi pi-table',
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          }
        ]
      }
    ];
  }
}
