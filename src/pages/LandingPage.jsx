import { Link } from "react-router";

export default function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-slate-950 to-slate-950" />

        {/* Decorative Blur */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm text-red-400">
              🎬 Discover Movies & TV Shows
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Next
              <span className="block text-red-500">
                Favorite Movie
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Explore thousands of movies and TV shows, discover ratings,
              release dates, genres, and detailed information all in one
              place with Movie Radar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/movies"
                className="rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
              >
                Explore Movies
              </Link>

              <Link
                to="/movies"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
              >
                Browse Collection
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-2xl font-bold text-white">1000+</h3>
                <p className="text-sm text-slate-400">Shows</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-sm text-slate-400">Explore</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Free</h3>
                <p className="text-sm text-slate-400">Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
