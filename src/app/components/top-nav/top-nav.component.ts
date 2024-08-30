import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent implements OnInit {
  currentTheme: string = '';

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.applyThemeBasedOnSystemPreference();
  }

  setTheme(theme: string): void {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.currentTheme = 'light';
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.currentTheme = 'dark';
    } else if (theme === 'system') {
      localStorage.removeItem('theme');
      this.applyThemeBasedOnSystemPreference();
    }
  }

  applyThemeBasedOnSystemPreference(): void {
    const theme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (theme === 'dark' || (!theme && prefersDarkScheme)) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.currentTheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.currentTheme = 'light';
    }
  }
}
