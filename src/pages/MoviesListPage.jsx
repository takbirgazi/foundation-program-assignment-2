
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

export default function MoviesListPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const endpoint = search.trim()
        ? `https://api.tvmaze.com/search/shows?q=${search}`
        : `https://api.tvmaze.com/shows`;

      const res = await fetch(endpoint);
      const data = await res.json();

      const formatted = search
        ? data.map((item) => item.show)
        : data;

      setMovies(formatted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Browse Movies & Shows
        </h1>

        <div className="mb-10">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-400">
            Loading movies...
          </div>
        ) : movies.length === 0 ? (
          <div className="py-20 text-center text-slate-400">
            No movies found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}

        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </div>
    </section>
  );
}