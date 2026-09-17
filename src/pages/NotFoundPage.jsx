import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
            <div className="max-w-xl text-center">
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-white">
                    404
                </h1>

                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
                    Page Not Found
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                    The page you are looking for may have been removed, renamed,
                    or is temporarily unavailable.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
                    >
                        Go Home
                    </Link>

                    <Link
                        to="/movies"
                        className="w-full sm:w-auto rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-900"
                    >
                        Browse Movies
                    </Link>
                </div>
            </div>
        </section>
    );
}