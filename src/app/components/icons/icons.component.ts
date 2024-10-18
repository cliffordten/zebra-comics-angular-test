import { Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matArrowBackIos,
  matArrowForwardIos,
} from '@ng-icons/material-icons/baseline';

type IIcon = 'matArrowForwardIos' | 'matArrowBackIos' | 'ionEye' | 'ionHeart';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ matArrowForwardIos, matArrowBackIos })],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  className = input<string>();
  name = input.required<IIcon>();
}
