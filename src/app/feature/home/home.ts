import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [ RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  nav=inject(Navbar);
  footer=inject(Footer);
  // home.component.ts
constructor(private router: Router) {}
get onProfilePage() {
  return this.router.url.includes('profile');
}


}
