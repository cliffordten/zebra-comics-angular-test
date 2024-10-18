import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionContainerComponent } from '../../components/section-container/section-container.component';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { IBook } from '../../models/books';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SectionContainerComponent, BookItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  books: IBook[] = [
    {
      title: 'Touch and Follow Iron man',
      currentEpisode: 'Episode 7',
      cover: '/book_1.png',
      progressRead: 10,
    },
    {
      title: 'Kepnee and Tanka',
      currentEpisode: 'Episode 1',
      cover: '/book_2.png',
      progressRead: 30,
    },
    {
      title: 'Minuu and the Five Lions',
      currentEpisode: 'Episode 3',
      cover: '/book_3.png',
      progressRead: 5,
    },
    {
      title: 'Ten of Hearts',
      currentEpisode: 'Episode 1',
      cover: '/book_4.png',
      progressRead: 55,
    },
    {
      title: 'Kepnee and the Crocodile',
      currentEpisode: 'Episode 4',
      cover: '/book_1.png',
      progressRead: 25,
    },
    {
      title: 'Super Soldier',
      currentEpisode: 'Episode 15',
      cover: '/book_2.png',
      progressRead: 60,
    },
    {
      title: 'The Walking Dead',
      currentEpisode: 'Episode 8',
      cover: '/book_3.png',
      progressRead: 10,
    },
  ];
}
