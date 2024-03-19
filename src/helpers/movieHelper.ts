import { VIDEO_TYPE_ENUM } from "../enums/videoTypeEnum";
import { IMovieVideo } from "../model/movieModel";

const getMovieTrailer = (videos: IMovieVideo[]): IMovieVideo => {
  const filterData = videos?.filter(
    (eachVideo: IMovieVideo) => eachVideo.type === VIDEO_TYPE_ENUM.TRAILER
  );
  return filterData?.[0] ?? videos?.[0];
};

export { getMovieTrailer };
