import { Component } from '@angular/core';
import { IBook, IEpisode } from '../../models/books';
import { SynopsisHeroComponent } from '../../components/synopsis-hero/synopsis-hero.component';
import { EpisodeItemComponent } from '../../components/episode-item/episode-item.component';
import { IconsComponent } from '../../components/icons/icons.component';

@Component({
  selector: 'app-synopsis',
  standalone: true,
  imports: [SynopsisHeroComponent, EpisodeItemComponent, IconsComponent],
  templateUrl: './synopsis.component.html',
  styleUrl: './synopsis.component.scss',
})
export class SynopsisComponent {
  bookDetails: IBook = {
    title: 'Fantastic Tumbu and Where Art Thou?',
    description:
      'Deaconess Tomaino sends Tai and Nika to the planet Jemiro to escape the destruction of Wongan. However, the destruction is inexplicably aborted, and she becomes a fugitive. She leads an escape to Jemiro to save herself and Wongan from opportunists, hoping Tai and Nika are safeDid you just see clowns re me?! Lorem ispum Did you just imprint on me?! Lorem ispumDid osl lorem.',
    nLikes: '686',
    nViews: '18K',
    tags: ['Fantasy', 'Adventure', 'Action'],
    progressRead: 10,
    cover: '/book_4.png',
    currentEpisode: 'Episode 1',
    isNewEpisode: true,
  };
  bookEpisodes: IEpisode[] = [
    {
      title: 'Episode 1',
      genre: 'Fantasy',
      episodeNumber: '1',
      cover: '/book_1.png',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 2',
      genre: 'Fantasy',
      cover: '/book_2.png',
      episodeNumber: '2',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 3',
      genre: 'Fantasy',
      cover: '/book_3.png',
      episodeNumber: '3',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 4',
      genre: 'Fantasy',
      cover: '/book_4.png',
      episodeNumber: '4',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 5',
      genre: 'Fantasy',
      cover: '/book_5.png',
      episodeNumber: '5',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 6',
      genre: 'Fantasy',
      cover: '/book_6.png',
      episodeNumber: '6',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 1',
      genre: 'Fantasy',
      episodeNumber: '1',
      cover: '/book_1.png',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 2',
      genre: 'Fantasy',
      cover: '/book_2.png',
      episodeNumber: '2',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 3',
      genre: 'Fantasy',
      cover: '/book_3.png',
      episodeNumber: '3',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 4',
      genre: 'Fantasy',
      cover: '/book_4.png',
      episodeNumber: '4',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 5',
      genre: 'Fantasy',
      cover: '/book_5.png',
      episodeNumber: '5',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
    {
      title: 'Episode 6',
      genre: 'Fantasy',
      cover: '/book_6.png',
      episodeNumber: '6',
      nViews: '18K',
      date: 'Jan 25, 2023',
    },
  ];
}
