export interface ImovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name? : string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name? :string
}

export interface ItrendingResponse {
  page: number;
  results: ImovieData[];
  total_pages: number;
  total_results: number;
}
