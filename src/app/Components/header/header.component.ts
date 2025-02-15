import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }
  ngOnInit(): void {

  }
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const bootstrap = await import('bootstrap');
      setTimeout(() => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTriggerEl) => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, 0); // Small delay to ensure DOM elements are fully loaded
    }
  }
}
