import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          <div>
            <h2 className="text-xl font-bold text-white">
              🎬 Movie Radar
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Discover and explore your favorite movies and TV shows.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/"
              className="text-slate-400 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="text-slate-400 transition hover:text-white"
            >
              Movies
            </Link>

            <a
              href="https://github.com/takbirgazi"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Movie Radar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}