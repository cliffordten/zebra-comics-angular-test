import { Component } from '@angular/core';

import { SectionContainerComponent } from '../section-container/section-container.component';
import { IBook } from '../../models/books';
import { BookItemComponent } from '../book-item/book-item.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-zebra-kids',
  standalone: true,
  imports: [SectionContainerComponent, BookItemComponent, IconsComponent],
  templateUrl: './zebra-kids.component.html',
  styleUrl: './zebra-kids.component.scss',
})
export class ZebraKidsComponent {
  zebraKids: IBook[] = [
    {
      title: 'Touch and Follow Iron man',
      currentEpisode: 'Episode 7',
      cover: '/book_5.png',
      progressRead: 10,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: true,
    },
    {
      title: 'Kepnee and Tanka',
      currentEpisode: 'Episode 1',
      cover: '/book_6.png',
      progressRead: 30,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: false,
    },
    {
      title: 'Minuu and the Five Lions',
      currentEpisode: 'Episode 3',
      cover: '/book_7.png',
      progressRead: 5,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: false,
    },
    {
      title: 'Ten of Hearts',
      currentEpisode: 'Episode 1',
      cover: '/book_4.png',
      progressRead: 55,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: true,
    },
    {
      title: 'Kepnee and the Crocodile',
      currentEpisode: 'Episode 4',
      cover: '/book_1.png',
      progressRead: 25,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: false,
    },
    {
      title: 'Super Soldier',
      currentEpisode: 'Episode 15',
      cover: '/book_2.png',
      progressRead: 60,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: true,
    },
    {
      title: 'The Walking Dead',
      currentEpisode: 'Episode 8',
      cover: '/book_3.png',
      progressRead: 10,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      isNewEpisode: true,
    },
  ];
}
