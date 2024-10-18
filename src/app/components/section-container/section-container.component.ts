import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgClass, IconsComponent],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  heading = input<string>();
  leftIcon = input<boolean>();
  iconContainerClass = input.required<string>();
}
