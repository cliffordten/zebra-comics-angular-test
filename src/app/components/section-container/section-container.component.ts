import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { IconsComponent } from '../icons/icons.component';
import { InfiniteSliderDirective } from '../../directives/slider.directive';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgClass, IconsComponent, InfiniteSliderDirective],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  heading = input<string>();
  leftIcon = input<boolean>();
  shouldAnimate = input<boolean>(false);
  iconContainerClass = input.required<string>();
  slideLength = input<`${string}rem`>();
}
