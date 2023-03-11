import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-portfolio-scroll-to-top',
  templateUrl: './portfolio-scroll-to-top.component.html',
  styleUrls: ['./portfolio-scroll-to-top.component.css']
})
export class PortfolioScrollToTopComponent implements OnInit {
  windowScrolled: boolean;


  constructor(@Inject(DOCUMENT) private document: Document) {
    this.windowScrolled = false;
   }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(): void {
      (function smoothscroll(): void {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }

}
