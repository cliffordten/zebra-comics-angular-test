import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  input,
  NgZone,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[infiniteSlider]',
  standalone: true,
})
export class InfiniteSliderDirective implements AfterViewInit, OnDestroy {
  containerClass = input.required<string>();
  itemClass = input.required<string>();
  shouldAnimate = input<boolean>(false);
  slideInterval = input<number>(3000);
  slideDuration = input<number>(500);
  slideLength = input<`${string}rem`>();

  private container: HTMLElement | null = null;
  private items: HTMLElement[] = [];
  private intervalId: number | null = null;
  private isAnimating: boolean = false;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.shouldAnimate() && this.isBrowser) {
      this.container = this.el.nativeElement.querySelector(
        `.${this.containerClass()}`
      );
      if (!this.container) {
        console.error('Slider container not found');
        return;
      }
      this.updateItems();
      if (this.items.length === 0) {
        console.error('No slider items found');
        return;
      }

      // this.duplicateItems();
      this.setupSlider();
      this.startSlider();
    }
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  private updateItems() {
    this.items = Array.from(
      this.container!.querySelectorAll(`.${this.itemClass()}`)
    );
  }

  private duplicateItems() {
    const itemsToDuplicate = this.items.slice(0, 5);
    itemsToDuplicate.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      this.container!.appendChild(clone);
    });
    this.updateItems();
  }

  private setupSlider() {
    if (!this.container) return;
    this.container.style.overflowX = 'hidden';
    this.container.style.whiteSpace = 'nowrap';
    this.items.forEach((item) => {
      item.style.display = 'inline-block';
      item.style.transition = `margin-left ${this.slideDuration()}ms ease`;
    });
  }

  private startSlider() {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = window.setInterval(
        () => this.slideItems(),
        this.slideInterval()
      );
    });
  }

  private stopSlider() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private slideItems() {
    if (!this.container || this.items.length === 0 || this.isAnimating) return;

    this.isAnimating = true;
    const itemWidth = this.items[0].offsetWidth;

    // Move the first item
    this.items[0].style.marginLeft = this.slideLength()
      ? `-${this.slideLength()}`
      : `-${itemWidth}px`;

    setTimeout(() => {
      // Remove the first item and append it to the end
      const firstItem = this.items.shift()!;
      firstItem.style.marginLeft = '0';
      this.container!.appendChild(firstItem);

      this.updateItems();
      this.isAnimating = false;
    }, this.slideDuration());
  }
}
