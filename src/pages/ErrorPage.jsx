import { Link } from "react-router";



export default function ErrorPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
            <div className="max-w-xl text-center">
                <div className="mb-6 text-6xl">⚠️</div>

                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    Something Went Wrong
                </h1>

                <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                    An unexpected error occurred while loading this page.
                    Please refresh the page or try again later.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
                    >
                        Reload Page
                    </button>

                    <Link
                        to="/"
                        className="w-full sm:w-auto rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-900"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
