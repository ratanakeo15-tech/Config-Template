import { Component, inject, Injectable } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-navigation-page',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navigation-page.html',
  styleUrl: './navigation-page.css'
})
export class NavigationPage {
 currentPage = 1;
totalPages = 20;  
visiblePages = 5;

get pages(): number[] {
  const pages: number[] = [];

  // determines which block of pages we’re in.
  const chunkIndex = Math.floor((this.currentPage - 1) / this.visiblePages);

  //start is calculated as chunkIndex * visiblePages + 1, so it always starts at 1, 6, 11, etc.
  // nextPage() and prevPage() jump by 5 pages exactly.
  let start = chunkIndex * this.visiblePages + 1;
  //  it's mean end =start 
  let end = start + this.visiblePages - 1;

  if (end > this.totalPages) {
    end = this.totalPages;
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}

goToPage(page: number) {
  this.currentPage = page;
}

nextPage() {
  const nextStart = this.currentPage + this.visiblePages;
  if (nextStart <= this.totalPages) {
    this.currentPage = nextStart;
  }
}

prevPage() {
  const prevStart = this.currentPage - this.visiblePages;
  if (prevStart >= 1) {
    this.currentPage = prevStart;
  }
}
// Create a route mapping in your component
pageRoutes: { page: number; route: string }[] = [
  { page: 1, route: 'showcaseBoard' },
  { page: 2, route: 'function1' },
  { page: 3, route: 'function3' },
  { page: 4, route: 'function2' },
  { page: 5, route: '' },
  
  
];
// Get the route for a page dynamically
getRouteForPage(page: number): string {
  const match = this.pageRoutes.find(p => p.page === page);
  return match ? match.route : '/not-found';
}


}
