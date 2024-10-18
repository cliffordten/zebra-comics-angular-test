import { Component, input } from '@angular/core';
import { IBook } from '../../models/books';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  bookItem = input<IBook>({
    title: 'The Walking Dead',
    currentEpisode: 'Episode 7',
    cover: '/book_1.png',
    progressRead: 10,
  });
}
