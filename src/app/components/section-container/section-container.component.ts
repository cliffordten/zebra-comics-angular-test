import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import {
  matArrowBackIos,
  matArrowForwardIos,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  viewProviders: [provideIcons({ matArrowForwardIos, matArrowBackIos })],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  heading = input<string>();
  leftIcon = input<boolean>();
  iconContainerClass = input.required<string>();
}
