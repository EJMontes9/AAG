import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {RippleModule} from "primeng/ripple";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true
      },
      {
        label: 'Comunicaciones',
        items: [
          {
            label: 'Creacion',
            icon: 'pi pi-plus',
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
            shortcut: '⌘+O'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q'
          }
        ]
      },
      {
        separator: true
      }
    ];
  }
}
