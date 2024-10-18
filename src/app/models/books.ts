export interface IBook {
  title: string;
  currentEpisode: string;
  cover?: string;
  progressRead: number;
  isNewEpisode?: boolean;
  nLikes?: string;
  description?: string;
  tags?: string[];
  nViews?: string;
}

export interface IEpisode {
  title: string;
  genre: string;
  episodeNumber: string;
  cover?: string;
  nViews: string;
  date?: string;
}

export interface ITrending {
  book: IBook;
  episode: IEpisode;
  isExpanded?: boolean;
}
