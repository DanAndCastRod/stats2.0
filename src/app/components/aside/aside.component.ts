import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  isModulo1Open = false;
  isModulo2Open = false;
  isModulo3Open = false;

  toggleSubMenu(menu: string) {
    switch(menu) {
      case 'modulo1':
        this.isModulo1Open = !this.isModulo1Open;
        break;
      case 'modulo2':
        this.isModulo2Open = !this.isModulo2Open;
        break;
      case 'modulo3':
        this.isModulo3Open = !this.isModulo3Open;
        break;
    }
  }
}
