import { Component, Inject, inject } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ShowcaseCard } from "../../shared/components/showcase-card/showcase-card";
import { NavigationPage } from '../../shared/components/navigation-page/navigation-page';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, ShowcaseCard,NavigationPage],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  nav=inject(Navbar);
  footer=inject(Footer);
  main=inject(ShowcaseCard)
  pagination=Inject(NavigationPage)
  // home.component.ts
constructor(private router: Router) {}
get onProfilePage() {
  return this.router.url.includes('profile');
}


}
