import { Component, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Injectable(
  {
    providedIn:'root'
  }
) 
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

constructor(private router:Router){} 
// myProfile()
//   {
//     this.router.navigate(['home/profile']);
//   }
  
}
