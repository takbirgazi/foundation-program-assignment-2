import { Link, NavLink } from "react-router";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">


                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl">🎬</span>

                    <div>
                        <h1 className="text-lg font-bold text-white sm:text-xl">
                            Movie Radar
                        </h1>
                        <p className="hidden text-xs text-slate-400 sm:block">
                            Discover Movies & Shows
                        </p>
                    </div>
                </Link>

                <nav className="flex items-center gap-2 sm:gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
                                ? "bg-white text-slate-950"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
                                ? "bg-white text-slate-950"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        Movies
                    </NavLink>

                    <Link
                        to="/movies"
                        className="hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:block"
                    >
                        Explore Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}