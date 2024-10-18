import { Component, input } from '@angular/core';
import { IBook } from '../../models/books';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-synopsis-hero',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './synopsis-hero.component.html',
  styleUrl: './synopsis-hero.component.scss',
})
export class SynopsisHeroComponent {
  bookDetails = input.required<IBook>();
}
