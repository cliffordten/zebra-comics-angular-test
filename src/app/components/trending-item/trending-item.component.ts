import { Component, input } from '@angular/core';
import { IBook, IEpisode } from '../../models/books';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-trending-item',
  standalone: true,
  imports: [BookItemComponent],
  templateUrl: './trending-item.component.html',
  styleUrl: './trending-item.component.scss',
})
export class TrendingItemComponent {
  trendingItem = input<IEpisode>({
    title: 'The Walking Dead',
    genre: 'Action',
    episodeNumber: '01',
    nViews: '230k',
  });
  bookItem = input<IBook>({
    title: 'Touch and Follow Iron man',
    currentEpisode: 'Episode 7',
    cover: '/book_1.png',
    progressRead: 10,
    tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
    nLikes: '10M',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    isNewEpisode: true,
  });
}
