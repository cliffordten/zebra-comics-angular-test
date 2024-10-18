import { Component, input } from '@angular/core';
import { IEpisode } from '../../models/books';

@Component({
  selector: 'app-episode-item',
  standalone: true,
  imports: [],
  templateUrl: './episode-item.component.html',
  styleUrl: './episode-item.component.scss',
})
export class EpisodeItemComponent {
  episodeItem = input<IEpisode>();
}
