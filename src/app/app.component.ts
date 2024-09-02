import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stats2.0';
  isAsideVisible = false;

  toggleAside() {
    this.isAsideVisible = !this.isAsideVisible;
  }
}
