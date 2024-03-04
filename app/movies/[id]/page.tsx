import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import MovieCredits from "../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

//fetching 할 수 있게 해주는 함수 > api로부터 영화 제목을 가져올 수 있음!
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}
