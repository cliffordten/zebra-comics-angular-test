import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  NgZone,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[slideHorizontal]',
  standalone: true,
})
export class HorizontalSlideDirective implements AfterViewInit, OnDestroy {
  slideDistance = input<string>('100%');
  slideDuration = input<number>(1000); // in milliseconds

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;
  private hasAnimated: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeElement();
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initializeElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translateX(-${this.slideDistance()})`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `opacity ${this.slideDuration()}ms, transform ${this.slideDuration()}ms`
    );
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.ngZone.run(() => this.animateElement());
            this.observer?.unobserve(entry.target);
            this.hasAnimated = true;
          }
        });
      }, options);

      this.observer.observe(this.el.nativeElement);
    });
  }

  private animateElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0)');
  }
}
