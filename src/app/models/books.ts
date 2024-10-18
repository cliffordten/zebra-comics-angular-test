export interface IBook {
  title: string;
  currentEpisode: string;
  cover?: string;
  progressRead: number;
  isNewEpisode?: boolean;
  nLikes?: string;
  description?: string;
  tags?: string[];
}

export interface IEpisode {
  title: string;
  genre: string;
  episodeNumber: string;
  nViews: string;
}
