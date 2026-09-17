
export default function MovieCard({ movie, onDetails }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-red-500/50">
            <img
                src={
                    movie.image?.medium ||
                    "https://placehold.co/300x450?text=No+Image"
                }
                alt={movie.name}
                className="h-87.5 w-full object-cover"
            />

            <div className="p-4">
                <h3 className="line-clamp-1 text-lg font-semibold text-white">
                    {movie.name}
                </h3>

                <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
                    <span>⭐ {movie.rating?.average || "N/A"}</span>
                    <span>📅 {movie.premiered?.split("-")[0] || "N/A"}</span>
                </div>

                <button
                    onClick={() => onDetails(movie)}
                    className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
                >
                    See Details
                </button>
            </div>
        </div>
    );
}