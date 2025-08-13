import { Component, inject, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-navigation-page',
  imports: [RouterLink],
  templateUrl: './navigation-page.html',
  styleUrl: './navigation-page.css'
})
export class NavigationPage {
   currentPage = 5;       
  totalPages = 10;
   nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
