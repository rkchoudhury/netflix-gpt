interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: string;
}

type VIDEO_TYPE = "Trailer" | "Teaser" | "Featurette" | "Clip";

interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: string;
  type: VIDEO_TYPE;
  official: boolean;
  published_at: string;
  id: string;
}

export { IMovie, IMovieVideo };
