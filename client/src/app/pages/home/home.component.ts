import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isHeaderFixed = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isHeaderFixed = window.scrollY > 0;
  }
}
