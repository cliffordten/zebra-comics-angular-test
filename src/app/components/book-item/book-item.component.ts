import { Component, input } from '@angular/core';
import { IBook } from '../../models/books';
import { ionHeart } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [NgIconComponent, NgClass, RouterLink],
  viewProviders: [provideIcons({ ionHeart })],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  encodeURIComponent = encodeURIComponent;
  bookItem = input<IBook>({
    title: 'The Walking Dead',
    currentEpisode: 'Episode 7',
    cover: '/book_1.png',
    progressRead: 10,
  });
  bookItemType = input<'LAST_READ' | 'START_HERE'>('LAST_READ');
  bookContainerClass = input<string>('');
  removeDescription = input<boolean>(false);
}
