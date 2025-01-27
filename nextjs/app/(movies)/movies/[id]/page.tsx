import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        {/* movie info와 함께 보임 */}
        <h3>movie info</h3>
        <MovieInfo id={id} />
      </Suspense>
      {/* 처음 렌더링 될때 바로 보임 */}
      <h3>movie videos</h3>
      <Suspense fallback={<h1>Loading vidoes</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
