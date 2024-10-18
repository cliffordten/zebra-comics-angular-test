import { Component } from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import {
  matArrowBackIos,
  matArrowForwardIos,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  viewProviders: [provideIcons({ matArrowForwardIos, matArrowBackIos })],
})
export class HeroComponent {}
