import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  input,
} from '@angular/core';

@Directive({
  selector: '[clickAnimate]',
  standalone: true,
})
export class ClickAnimateDirective {
  scaleSize = input<number>(1.4);
  scaleDuration = input<number>(300);
  confettiCount = input<number>(3);
  confettiDuration = input<number>(1000);

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.animateElement();
  }

  private animateElement() {
    const element = this.el.nativeElement;
    this.renderer.setStyle(
      element,
      'transition',
      `transform ${this.scaleDuration()}ms ease-in-out`
    );
    this.renderer.setStyle(element, 'transform', `scale(${this.scaleSize()})`);

    setTimeout(() => {
      this.renderer.setStyle(element, 'transform', 'scale(1)');
      setTimeout(() => {}, this.scaleDuration());
    }, this.scaleDuration());
  }
}
