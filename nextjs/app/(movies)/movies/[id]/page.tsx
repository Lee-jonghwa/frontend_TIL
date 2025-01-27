import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading vidoes</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
