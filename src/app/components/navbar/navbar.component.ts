import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleAsideEvent = new EventEmitter<void>();

  // This method is just to emit the event
  onToggleAside() {
    this.toggleAsideEvent.emit();
  }
}
