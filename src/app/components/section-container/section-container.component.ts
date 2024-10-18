import { Component, input } from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { matArrowBackIos, matArrowForwardIos } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ matArrowForwardIos, matArrowBackIos })],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss'
})
export class SectionContainerComponent {
  title = input<string>()
}
