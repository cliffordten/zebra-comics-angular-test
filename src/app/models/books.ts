export interface IBook {
  title: string;
  currentEpisode: string;
  cover?: string;
  progressRead: number;
  isNewEpisode?: boolean;
  nLikes?: number;
  description?: string;
  tags?: string[];
}
