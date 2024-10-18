import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionContainerComponent } from '../../components/section-container/section-container.component';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { IBook } from '../../models/books';
import { ZebraKidsComponent } from '../../components/zebra-kids/zebra-kids.component';
import { TrendingItemComponent } from '../../components/trending-item/trending-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SectionContainerComponent,
    BookItemComponent,
    ZebraKidsComponent,
    TrendingItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  lastRead: IBook[] = [
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

  startHere: IBook[] = [
    {
      title: 'Touch and Follow Iron man',
      currentEpisode: 'Episode 7',
      cover: '/book_1.png',
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
      cover: '/book_2.png',
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
      cover: '/book_3.png',
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

  trendingToday: IBook[] = [
    {
      title: 'Touch and Follow Iron man',
      currentEpisode: 'Episode 7',
      cover: '/book_1.png',
      progressRead: 10,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
      isNewEpisode: true,
    },
    {
      title: 'Kepnee and Tanka',
      currentEpisode: 'Episode 1',
      cover: '/book_2.png',
      progressRead: 30,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
      isNewEpisode: false,
    },
    {
      title: 'Minuu and the Five Lions',
      currentEpisode: 'Episode 3',
      cover: '/book_3.png',
      progressRead: 5,
      tags: ['Action', 'Adventure', 'Fantasy', 'Science fiction'],
      nLikes: '10M',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis',
      isNewEpisode: true,
    },
  ];
}
