import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service.ts';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EnvironmentService } from '../../../core/service/environment.service.ts.js';
import { EnvironmentIndicatorComponent } from '../../components/environment-indicator.component.ts.js';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    EnvironmentIndicatorComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIcon,
    MatNavList,
    RouterLink,
    MatDivider,
    MatDivider,
    MatMenu,
    MatMenuTrigger,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  protected readonly authService = inject(AuthService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly router = inject(Router);
  protected readonly isHandset = signal(false);
  protected readonly environmentService = inject(EnvironmentService);
  constructor() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isHandset.set(result.matches);
    });
  }
  protected logout(): void {
    this.authService.logout();
  }
}
