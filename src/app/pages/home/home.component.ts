import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionContainerComponent } from '../../components/section-container/section-container.component';
import { BookItemComponent } from '../../components/book-item/book-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SectionContainerComponent, BookItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
